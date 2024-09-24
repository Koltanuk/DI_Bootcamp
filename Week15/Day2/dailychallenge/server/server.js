
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse incoming JSON requests

// GET request for /api/hello route
app.get('/api/hello', (req, res) => {
  res.send('Hello From Express');
});

// POST request for /api/world route
app.post('/api/world', (req, res) => {
  const { inputValue } = req.body;
  console.log('Request body:', req.body);
  res.json({ message: `I received your POST request. This is what you sent me: ${inputValue}` });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
