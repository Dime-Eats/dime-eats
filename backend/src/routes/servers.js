const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Review = require('../models/Review');

// Get all servers
router.get('/', async (req, res) => {
try {
const servers = await User.find({ role: 'server' });
res.json(servers);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

// Drop a Dime (free like)
router.post('/drop-dime', async (req, res) => {
try {
const { toUserId, comment, photoURL } = req.body;
const review = new Review({
fromUserId: req.user?.uid, // from auth later
toUserId,
comment,
photoURL,
approved: true // for MVP
});
await review.save();

// Increment dime count
await User.findByIdAndUpdate(toUserId, { $inc: { dimes: 1 } });

res.status(201).json({ message: 'Dime dropped!' });
} catch (err) {
res.status(500).json({ message: err.message });
}
});

module.exports = router;
