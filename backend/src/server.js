const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes (we'll add more soon)
app.get('/', (req, res) => {
res.send('Dime Eats Backend is Running!');
});

// Connect to DB and start server
connectDB().then(() => {
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});
});
