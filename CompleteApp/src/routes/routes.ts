import * as control from "./controller";
import * as users from "./paths/users";
import * as notes from "./paths/notes";
const express = require("express");
const router = express.Router();
const passport = require('passport')
const { isAuthenticated } = require('../helpers/auth')

router.get("/", control.renderIndexPage);

router.get("/about", control.renderAboutPage);

// Authentication
router.get("/users/signin", users.signin);

router.get("/users/signup", users.signup);

router.post('/users/signup', users.signupData)

router.post('/users/signin', passport.authenticate('local', {
  successRedirect: '/notes',
  failureRedirect: '/users/signin',
  failureFlash: true
}));

router.get('/users/logout', users.logout)

// CRUD
router.get("/notes/new", isAuthenticated, notes.newNote);

router.get("/notes", isAuthenticated, notes.getNotes);

router.post("/notes/add", isAuthenticated, notes.addNote);

router.get("/notes/edit/:id", isAuthenticated, notes.editNote);

router.put("/notes/put/:id", isAuthenticated, notes.putNote);

router.get("/notes/del/:id", isAuthenticated, notes.delNote);

// Not Found
//router.get('/*', control.notFound);

export default router;
