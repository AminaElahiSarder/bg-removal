import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js'; // Adjust path if needed

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("API Working");
});

// Connect to the database
(async () => {
  try {
    await connectDB();
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
})();

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
