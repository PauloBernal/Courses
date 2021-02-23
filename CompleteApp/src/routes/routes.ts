import * as control from "./controller";
import * as users from "./paths/users";
import * as notes from "./paths/notes";
const express = require("express");
const router = express.Router();

router.get("/", control.renderIndexPage);

router.get("/about", control.renderAboutPage);

// Authentication
router.get("/users/signin", users.signin);

router.get("/users/signup", users.signup);

router.post('/users/signup', users.signupData)

// CRUD
router.get("/notes/new", notes.newNote);

router.get("/notes", notes.getNotes);

router.post("/notes/add", notes.addNote);

router.get("/notes/edit/:id", notes.editNote);

router.put("/notes/put/:id", notes.putNote);

router.get("/notes/del/:id", notes.delNote);

// Not Found
//router.get('/*', control.notFound);

export default router;
