function previewImage(){
    const file = document.getElementById("imageInput").files[0];
    const preview = document.getElementById("preview");
    const fileText = document.getElementById("file-text");

    if(file){
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
        fileText.innerText = "File: " + file.name;
    }
}

async function uploadImage(event){
    if(event) event.preventDefault();

    const fileInput = document.getElementById("imageInput");
    const file = fileInput.files[0];
    const btnText = document.getElementById("btnText");
    const spinner = document.getElementById("btnSpinner");
    const uploadBtn = document.getElementById("uploadBtn");
    const resultDiv = document.getElementById("result");
    const foodName = document.getElementById("foodName");

    if(!file){
        alert("Please select an image.");
        return;
    }

    uploadBtn.disabled = true;
    spinner.style.display = "inline-block";

    btnText.innerText = "Detecting Dish...";
    setTimeout(() => {
        btnText.innerText = "Fetching Recipe...";
    }, 1500);

    resultDiv.style.display = "none";

    const formData = new FormData();
    formData.append("image", file);

    try {
        const response = await fetch("http://127.0.0.1:3000/upload", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Something went wrong");
        }

        resultDiv.style.display = "block";

        foodName.innerHTML = `
            <h3>🍽️ ${data.title}</h3>
            <img src="${data.image}" style="width:100%; border-radius:10px;" />

            <h4>🧾 Ingredients:</h4>
            <ul>
                ${data.ingredients.map(i => `<li>${i}</li>`).join("")}
            </ul>

            <h4>👨‍🍳 Instructions:</h4>
            ${data.instructions
                .split(". ")
                .map(step => `<p>👉 ${step}</p>`)
                .join("")}

            <button onclick="location.reload()">Try Another Recipe 🔄</button>
        `;

    } catch(error) {
        alert("System Error: " + error.message);
    } finally {
        uploadBtn.disabled = false;
        spinner.style.display = "none";
        btnText.innerText = "Generate Recipe";
    }
}