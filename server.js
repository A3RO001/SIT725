const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Card = require("./models/card");
const Form = require("./models/form");

const app = express();
const port = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB!');
});

// API: Get cards
app.get('/api/projects', async (req, res) => {
  const cards = await Card.find({});
  res.json({ statusCode: 200, data: cards, message: "Success" });
});

// API: Save form data
app.post('/api/form', async (req, res) => {
  try {
    const formData = new Form(req.body);
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving form data" });
  }
});

// Insert sample card (ensure image exists)
const sampleCard = new Card({
  title: "Kitten 4",
  image: "images/kitten-4.jpg",
  link: "About Kitten 4",
  description: "Demo description about kitten 4"
});
sampleCard.save().then(() => console.log("Sample card saved!"));

app.listen(port, () => {
  console.log("App listening on port: " + port);
});
