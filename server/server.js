import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongodb.js';  // Keep .js extension for ES Modules
import dotenv from 'dotenv';

dotenv.config();

const app = express();

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

app.listen(4000, () => {
  console.log("Server Running on port 4000");
});
