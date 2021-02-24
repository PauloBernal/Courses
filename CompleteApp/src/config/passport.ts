const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/User");
const bcrypt = require("bcryptjs");

const matchPassword = async (password1, password2) => {
  return await bcrypt.compare(password1, password2);
};


const encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
    },
    async (email, password, done) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        return done(null, false, { message: "Not user found" });
      } else {
        const match = await matchPassword(password, user.password);
        if (match) {
          return done(null, user);
        } else {
          console.log('Not valid password')
          return done(null, false, { message: 'Incorrect password' });
        }
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  })
});
