const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
fromUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
toUserId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
venue: String,
comment: String,
photoURL: String,
approved: { type: Boolean, default: false },
createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Review', reviewSchema);
