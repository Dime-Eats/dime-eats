const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
firebaseUid: { type: String, required: true, unique: true },
name: String,
email: String,
role: { type: String, enum: ['customer', 'server', 'admin'], default: 'customer' },
photoURL: String,
bio: String,
isOnShift: { type: Boolean, default: false },
isPremium: { type: Boolean, default: false },
dimes: { type: Number, default: 0 },
placesOfWork: [{ type: String }], // venue IDs
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
