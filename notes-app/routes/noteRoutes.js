const express = require("express");
const router = express.Router();

const {
  getNotesPage,
  addNote,
  deleteNote,
} = require("../controllers/noteController");

router.get("/", getNotesPage);
router.post("/add", addNote);
router.post("/delete/:id", deleteNote);

module.exports = router;
