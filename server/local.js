import app from './server.js';

const PORT = process.env.PORT || 4000;

// Start the server locally
app.listen(PORT, () => {
  console.log("Server Running on port " + PORT);
});
