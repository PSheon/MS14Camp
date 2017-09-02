const mongoose = require('mongoose');

const MoneySchema = mongoose.Schema({
  mSerial: String,
  amount:Number,
  isExpired:Boolean
});

module.exports = mongoose.model('Money', MoneySchema);
