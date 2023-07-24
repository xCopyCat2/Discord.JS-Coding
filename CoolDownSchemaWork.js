const mongoose = require('mongoose');

const cooldownSchemaWork = new mongoose.Schema({
    UserId: { type: String, required: true },
    LastUsed: { type: Number, required: true }
});

module.exports = mongoose.model('CooldownWork', cooldownSchemaWork);