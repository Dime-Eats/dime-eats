const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Simple Firebase auth placeholder (we'll expand later)
router.post('/register', async (req, res) => {
try {
const { firebaseUid, name, email, role } = req.body;
let user = await User.findOne({ firebaseUid });
if (!user) {
user = new User({ firebaseUid, name, email, role: role || 'customer' });
await user.save();
}
res.json(user);
} catch (err) {
res.status(500).json({ message: err.message });
}
});

module.exports = router;
