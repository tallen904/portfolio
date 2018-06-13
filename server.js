// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Sets up the Express App
const app = express();
app.use(express.static(__dirname + "/public"));
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

// Listen for server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})