#  🍽️ AI Recipe Generator from Image

This project is a full-stack web application that generates complete recipes from a food image. The user uploads an image, the system detects the food item using a Machine Learning model, and then fetches a detailed recipe including ingredients and instructions.

The project integrates **Machine Learning, Backend Development, and External APIs** to provide a real-world intelligent solution.

-------------------------------------------------------------------------

## 🚀 Project Structure

RECIPE-GENERATOR-P/
│
├── Backend/
│   ├── uploads/           # Stored uploaded images
│   └── server.js          # Node.js backend server
│
├── Frontend/
│   ├── index.html         # UI structure
│   ├── style.css          # Styling
│   └── script.js          # Frontend logic
│
├── ml-model/
│   ├── app.py             # Flask ML API
│   ├── Burger.avif        # Test image
│   └── pizza.webp         # Test image
│
├── node_modules/
├── package.json
├── package-lock.json
└── README.md


-------------------------------------------------------------------------

## 🧠 How the System Works

1. User uploads a food image from the frontend.
2. The image is sent to the Node.js backend.
3. Backend uses Multer to handle file upload.
4. The image is forwarded to a Flask API.
5. A pretrained MobileNetV2 model (TensorFlow) predicts the food item.
6. The backend uses the prediction to call the Spoonacular API.
7. Recipe details (ingredients + instructions) are fetched.
8. The result is sent back and displayed on the frontend.

-------------------------------------------------------------------------

## ⚙️ Installation Guide

### 1. Clone the Repository

git clone https://github.com/Muskanmadhwani123/Recipe-Generator-p
cd RECIPE-GENERATOR-P

--------------------------------------------------------------

### 2. Install Node.js Dependencies (Backend)

npm install

------------------------------------------------------------------------

### 3. Install Python Libraries (ML Model)

Navigate to ML folder:

cd ml-model

Install dependencies:

pip install tensorflow flask pillow numpy

-------------------------------------------------------------------------

## ▶️ Running the Project

### 1. Start ML Server (Flask)

cd ml-model
python app.py

You should see:

Running on http://127.0.0.1:5000

-------------------------------------------------------------------------

### 2. Start Backend Server (Node.js)

node Backend/server.js

You should see:

Server running on port 3000

-------------------------------------------------------------------------

### 3. Run Frontend

* Open `Frontend/index.html` using Live Server

-------------------------------------------------------------------------

## 🧪 Testing the ML API (Optional)

Place an image inside `ml-model/` and run:

curl.exe -X POST -F "image=@pizza.webp" http://127.0.0.1:5000/predict

Expected Output:

{"prediction":"pizza"}

-------------------------------------------------------------------------

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Node.js
* Express.js
* Multer (File Upload)
* Axios (API Requests)
* CORS

### Machine Learning

* Python
* TensorFlow (MobileNetV2)
* Flask API
* NumPy
* Pillow

### External API

* Spoonacular API (Recipe Data)

-------------------------------------------------------------------------

## ✨ Features

* 📸 Upload food images
* 🧠 AI-based food recognition
* 🍽️ Automatic recipe generation
* 🧾 Ingredients list
* 👨‍🍳 Step-by-step instructions
* ⚡ Real-time processing

-------------------------------------------------------------------------

## 🎯 Workflow

User Image
   ↓
Frontend (HTML/CSS/JS)
   ↓
Node.js Backend (Express + Multer)
   ↓
Flask ML API (TensorFlow Model)
   ↓
Food Prediction
   ↓
Spoonacular API
   ↓
Recipe Data (Ingredients + Instructions)
   ↓
Frontend Display

-------------------------------------------------------------------------

## 💡 Future Improvements

* Add user authentication
* Save favorite recipes
* Add nutritional information
* Improve UI/UX
* Deploy the project online

-------------------------------------------------------------------------

## 💼 Author

This project demonstrates the integration of **Machine Learning with Full-Stack Web Development**, solving a real-world problem of generating recipes from food images.

-------------------------------------------------------------------------
