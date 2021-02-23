import { Schema, model } from 'mongoose';
const bcrypt = require('bcryptjs')

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
  }
});

UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

module.exports = model('User', UserSchema);