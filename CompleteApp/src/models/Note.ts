const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const NoteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
})

module.exports = model('Note', NoteSchema);