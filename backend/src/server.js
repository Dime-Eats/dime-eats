const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/servers', require('./routes/servers'));
app.use('/api/places', require('./routes/places'));
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
res.send('✅ Dime Eats Backend is Running!');
});

connectDB().then(() => {
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`🚀 Server running on port ${PORT}`);
});
});
