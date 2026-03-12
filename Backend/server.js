const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const FormData = require("form-data");

const app = express();

const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("image"), async (req, res) => {

    const form = new FormData();
    form.append("image", fs.createReadStream(req.file.path));

    try {

        const response = await axios.post(
            "http://127.0.0.1:5000/predict",
            form,
            { headers: form.getHeaders() }
        );

        res.json(response.data);

    } catch (error) {
        res.status(500).send("Error connecting to ML API");
    }

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});