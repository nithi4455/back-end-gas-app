const mongoose = require('mongoose');

const GasProviderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  availableSlots: [{ type: String }],
}, { timestamps: true });

module.exports = mongoose.model('GasProvider', GasProviderSchema);
