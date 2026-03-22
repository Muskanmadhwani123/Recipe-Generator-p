const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const app = express();
const cors = require("cors");
app.use(cors());

const upload = multer({ dest: "uploads/" });

console.log("File is running...");

app.post("/upload", upload.single("image"), async (req, res) => {

    const form = new FormData();
    form.append("image", fs.createReadStream(req.file.path));

    try {
        // 1. Get food prediction
        const mlResponse = await axios.post(
            "http://127.0.0.1:5000/predict",
            form,
            { headers: form.getHeaders() }
        );

        const foodName = mlResponse.data.prediction;
        console.log("Detected food:", foodName);

        // 2. Get recipe from Spoonacular
        const recipeResponse = await axios.get(
            "https://api.spoonacular.com/recipes/complexSearch",
            {
                params: {
                    query: foodName,
                    number: 1,
                    addRecipeInformation: true,
                    apiKey: "da16aa51c0154effa5d950830a7090d9"
                }
            }
        );

        const results = recipeResponse.data.results;

        if (results.length === 0) {
            return res.json({
                food: foodName,
                title: "No recipe found",
                ingredients: [],
                instructions: "Try another dish image."
            });
        }

        const recipe = results[0] || {};
        const recipeId = recipe.id;

        const detailResponse = await axios.get(
            `https://api.spoonacular.com/recipes/${recipeId}/information`,
            {
                params: {
                    apiKey: "da16aa51c0154effa5d950830a7090d9"
                }
            }
        );

        const fullRecipe = detailResponse.data;

       res.json({
        food: foodName,
        title: fullRecipe.title,
        image: fullRecipe.image,
        ingredients: fullRecipe.extendedIngredients
            ? fullRecipe.extendedIngredients.map(i => i.original)
            : ["No ingredients available"],
        instructions: fullRecipe.instructions || "No instructions available"
        });


    } catch (error) {
        console.error(error.message);
        res.status(500).json({
    error: "Error processing request"
});
    }
});

app.listen(3000, () => {
        console.log("Server running on port 3000");
        });