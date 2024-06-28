const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  gasProvider: { type: mongoose.Schema.Types.ObjectId, ref: 'GasProvider', required: true },
  slot: { type: String, required: true },
  status: { type: String, default: 'pending', enum: ['pending', 'confirmed', 'cancelled'] },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
