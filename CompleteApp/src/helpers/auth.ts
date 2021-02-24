interface Helper {
  isAuthenticated?: any;
}

const helpers: Helper = {};

helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error', 'No Autorizado');
  res.redirect('/users/signin');
};

module.exports = helpers;