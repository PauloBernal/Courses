import config from './config/config';
import router from './routes/routes';
import './db/database';
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
const expHan = require('express-handlebars');
const metOv = require('method-override');
const expSes = require('express-session');
const flash = require('connect-flash');
const passport = require('passport')
require('./config/passport');

// Settings
app.set('port', config.SERVER_PORT);
app.set('host', config.SERVER_HOST);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', expHan({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}))
app.set('view engine', '.hbs')

// Middlewares 
app.use(express.urlencoded({ extended: false }));
app.use(metOv('_method'));
app.use(expSes({
  secret: 'mysecretapp',
  resave: true,
  saveUninitialized: true
}))
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session())
app.use(flash());

// Global Variables
app.use((req, res, next) => {
  res.locals.successMsg = req.flash('successMsg');
  res.locals.errorMsg = req.flash('errorMsg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  try {
    res.locals.name = req.user.username
    res.locals.userid = req.user.id
  }
  catch (err) {
    console.log(err.toString())
  }
  next();
});

// routes
app.use(router);

// Static Files
app.use(express.static(path.join(__dirname, 'public')));

export default app;