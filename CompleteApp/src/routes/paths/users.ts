import { RequestHandler } from 'express';
const User = require('../../models/User');
const bcrypt = require('bcryptjs')


const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

export const signin: RequestHandler = (req, res) => {
  const path = './users/signin';
  res.render(path);
};

export const signup: RequestHandler = (req, res) => {
  const path = './users/signup';
  res.render(path);
};

export const signupData: RequestHandler = async (req, res) => {
  const { username, email, password, cPassword } = req.body;
  const errors = []
  const userFound = await User.findOne({ username: username });
  if (password == cPassword) {
    if (!userFound) {
      if (password.length > 8) {
        console.log('Correct Password')
        const newUser = new User({ username, email, password })
        console.log(password)
        newUser.password = await encryptPassword(password)
        console.log('User Added Successfully');
        console.log(newUser)
        try {
          const savedUser = await newUser.save();
          res.redirect('/users/signin');
        }
        catch (error) {
          console.log(error.toString())
        }
      }
      else {
        req.flash('errorMsg', 'The password must contain at least 8 characters');
        res.redirect('/users/signup');
      }
    }
    else {
      console.log("The user already exists");
      req.flash('errorMsg', 'The user already exists');
      res.redirect('/users/signup');
    }

  }
  else {
    console.log("The password isn't the same than the confirmed password");
    req.flash('errorMsg', 'Try with the same password');
    res.redirect('/users/signup');
  }
}

export const logout = async (req, res) => {
  req.logout();
  res.redirect('/');
}