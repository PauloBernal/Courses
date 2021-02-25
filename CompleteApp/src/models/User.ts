import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  age: {
    type: Number,
    required: false,
    trim: true
  },
  date: {
    type: Date,
    default: Date.now
  },
}, {
  timestamps: true,
  versionKey: false
});

module.exports = model('User', UserSchema);