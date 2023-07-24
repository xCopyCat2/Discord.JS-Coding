const { model, Schema } = require('mongoose');

let testSchema = new Schema({
  GuildID: String,
  UserID: String,
  Wallet: { type: Number, default: 0 },
  Bank: { type: Number, default: 0 },
});

module.exports = model('testSchema', testSchema);