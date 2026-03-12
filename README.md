# Recipe-Generator-p
This project is a web application that generates recipes from a food image. The user uploads an image of food, and the system detects the food item using a Machine Learning model and then displays the recipe.  The image recognition is performed using the pretrained model MobileNetV2 from TensorFlow and served through a Flask API.

Installation Guide
1. Clone or Download the Project
git clone <repository-url>
cd Recipe-generator
2. Install Python Libraries

Navigate to the ML model folder.
cd ml-model

Install required libraries:
pip install tensorflow flask pillow numpy

Running the Machine Learning Server

Start the Flask server:
python app.py
On the first run, TensorFlow will download the MobileNetV2 model automatically.

You should see:
Running on http://127.0.0.1:5000
This means the ML API server is running.

Testing the API
Place a food image inside the ml-model folder.

Example:
pizza.webp

Run the following command in PowerShell:
curl.exe -X POST -F "image=@pizza.webp" http://127.0.0.1:5000/predict

Expected output:

{"food":"pizza"}
How the System Works

1.User uploads a food image.
2.The image is sent to the Flask ML API.
3.The MobileNetV2 model processes the image.
4.The model predicts the food object.
5.The system returns the prediction result.

Workflow:

User Image
   ↓
ML API (Flask)
   ↓
TensorFlow Model
   ↓
Prediction Result
