from flask import Flask, request, jsonify
import tensorflow as tf
import numpy as np
from PIL import Image

app = Flask(__name__)

# Load pretrained MobileNet model
model = tf.keras.applications.MobileNetV2(weights="imagenet")

def preprocess_image(image):
    image = image.resize((224,224))
    image = np.array(image)
    image = np.expand_dims(image, axis=0)
    image = tf.keras.applications.mobilenet_v2.preprocess_input(image)
    return image

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    image = Image.open(file.stream)

    processed = preprocess_image(image)

    predictions = model.predict(processed)
    decoded = tf.keras.applications.mobilenet_v2.decode_predictions(predictions, top=1)

    result = decoded[0][0][1]

    return jsonify({"prediction": result})

if __name__ == "__main__":
    app.run(port=5000)