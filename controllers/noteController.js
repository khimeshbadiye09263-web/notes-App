const Note = require("../models/Note");

// Show notes page
exports.getNotesPage = async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.render("notes", { notes });
};

// Add note
exports.addNote = async (req, res) => {
  const { text } = req.body;

  if (!text || text.trim() === "") {
    return res.redirect("/");
  }

  await Note.create({ text });
  res.redirect("/");
};

// Delete note
exports.deleteNote = async (req, res) => {
  const { id } = req.params;
  await Note.findByIdAndDelete(id);
  res.redirect("/");
};
