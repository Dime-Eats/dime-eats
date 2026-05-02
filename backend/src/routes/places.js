const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/search', async (req, res) => {
try {
const { query } = req.query;
const response = await axios.get(
`https://maps.googleapis.com/maps/api/place/textsearch/json`,
{
params: {
query,
key: process.env.GOOGLE_PLACES_API_KEY
}
}
);
res.json(response.data);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

module.exports = router;
