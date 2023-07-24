const mongoose = require('mongoose');

const cooldownSchemaRob = new mongoose.Schema({
    UserId: { type: String, required: true },
    LastUsed: { type: Number, required: true }
});

module.exports = mongoose.model('CooldownRob', cooldownSchemaRob);