const mongoose = require('mongoose');

const cooldownSchemaBeg = new mongoose.Schema({
    UserId: { type: String, required: true },
    LastUsed: { type: Number, required: true }
});

module.exports = mongoose.model('CooldownBeg', cooldownSchemaBeg);