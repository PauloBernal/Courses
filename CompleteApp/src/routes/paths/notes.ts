import { RequestHandler } from "express";
const Note = require("../../models/Note");

interface User {
  username?: string;
  password?: string;
  email?: string;
  age?: number;
  date?: Date;
  id?: string;
}

export const newNote: RequestHandler = (req, res) => {
  const pageTitle = "New Note";
  const title = "";
  const description = "";
  const formAction = "/notes/add";
  const formMethod = "POST";
  res.render("notes/newNotes", {
    pageTitle,
    title,
    description,
    formAction,
    formMethod,
  });
};

export const addNote: RequestHandler = async (req, res) => {
  const { title, description } = req.body;
  const errors = [];
  const pageTitle = "New Note";
  const formAction = "/notes/add";
  const formMethod = "POST";
  if (!title) {
    errors.push({ text: "Please write a title" });
  }
  if (!description) {
    errors.push({ text: "Please write a description" });
  }
  if (errors.length > 0) {
    res.render("notes/newNotes", {
      errors,
      title,
      description,
      pageTitle,
      formAction,
      formMethod,
    });
  } else {
    const foundNote = await Note.findOne({ title: req.body.title });
    if (foundNote) {
      console.log("[ERROR] This note already exists");
      errors.push({ text: "The note already exists. Please try again" });
      const pageTitle = "New Note";
      res.render("notes/newNotes", {
        errors,
        title,
        description,
        pageTitle,
        formAction,
        formMethod,
      });
    } else {
      req.flash("successMsg", "Note saved successfully!");
      const newNote = new Note({ title, description });
      const user: User = req.user;
      try {
        newNote.user = user.id;
      } catch (err) {
        console.log("Not user");
      }
      const savedNote = await newNote.save();
      console.log(savedNote);
      res.redirect("/notes");
    }
  }
};

export const getNotes = async (req, res) => {
  const gotNotes = await Note.find({user: req.user.id});
  const notes = [];
  gotNotes.map((note) => {
      notes.push({
        title: note.title,
        description: note.description,
        id: note._id,
      });
  });
  console.log(gotNotes);
  if (notes.length > 0) {
    var nState = false;
  } else {
    var nState = true;
  }
  res.render("notes/notes", {
    notes,
    nState,
  });
};

export const delNote = async (req, res) => {
  const id = req.params.id;
  const foundNote = await Note.findByIdAndDelete(id);
  req.flash("successMsg", "Note deleted successfully!");
  res.redirect("/notes");
};

export const editNote = async (req, res) => {
  const id = req.params.id;
  const foundNote = await Note.findById(id);
  const pageTitle = "Edit Note";
  const title = foundNote.title;
  const description = foundNote.description;
  const edit = true;
  const formAction = `/notes/put/${id}?_method=PUT`;
  const formMethod = "POST";
  res.render("notes/newNotes", {
    pageTitle,
    title,
    description,
    edit,
    formAction,
    formMethod,
  });
};

export const putNote = async (req, res) => {
  const id = req.params.id;
  const note = req.body;
  console.log(note);
  const foundNote = await Note.findByIdAndUpdate(id, {
    title: note.title,
    description: note.description,
  });
  console.log(foundNote);
  res.redirect("/notes");
};
