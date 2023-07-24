const mongoose = require('mongoose');

const lotterySchema = new mongoose.Schema({
  UserId: {
    type: String,
    required: true,
    unique: true,
  },
  LastParticipation: {
    type: Number,
    default: null,
  },
});

module.exports = mongoose.model('Lottery', lotterySchema);