const express = require('express');
const cors = require('cors');
const connectDB = require('./configs/mongodb.js');
const dotenv = require('dotenv');

dotenv.config();

const app = express(); // Initialize the app correctly

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the database
(async () => {
  try {
    await connectDB();
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
})();

// Routes
app.get('/', (req, res) => {
  res.send("API Working");
});

// Export the app for Vercel deployment
module.exports = app;
