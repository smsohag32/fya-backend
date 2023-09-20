// models/Message.js
const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  room: String,
  user: String,
  text: String,
  time: {
    type: Date,
    default: new Date(),
    get: (v) => v.toLocaleString(),
  },
});

module.exports = mongoose.model('Message', messageSchema);
