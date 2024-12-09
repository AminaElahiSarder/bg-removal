import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './configs/mongodb.js'; 
import userRouter from './routes/userRoutes.js';
const PORT = process.env.PORT || 4000;

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send("API Working");
});
app.use('/api/user', userRouter)

// Connect to the database
(async () => {
  try {
    await connectDB();
    console.log("Database Connected");
  } catch (error) {
    console.error("Database Connection Error:", error);
  }
})();



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app