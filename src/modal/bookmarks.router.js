const express = require("express");
const BookMarks = require("../Schema/bookmarks.schema");

const app = express.Router();

app.post("/", async (req, res) => {
  try {
    let bookData = new BookMarks({ ...req.body });
    await bookData.save();
    res.status(200).send(bookData);
  } catch (er) {
    return res.status(500).send({ msg: er.message });
  }
});

app.get("/", async (req, res) => {
  try {
    let allBookmarks = await BookMarks.find();
    res.status(200).send(allBookmarks);
  } catch (er) {
    return res.status(404).send({ msg: er.message });
  }
});

app.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    let deletedData = await BookMarks.findByIdAndDelete(id);
    return res.status(200).send(deletedData);
  } catch (e) {
    res.status(401).send(e.message);
  }
});

module.exports = app;
