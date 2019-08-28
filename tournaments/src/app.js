const express = require("express");
const Book = require("./models/books_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "tournaments" });
});

app.get("/api/v1/tournaments", async (req, res) => {
  const tournaments = await Book.find({});
  res.json(tournaments);
});

app.post("/api/v1/tournaments", async (req, res) => {
  const book = new Book({ name: req.body.name });
  const savedBook = await book.save();
  res.json(savedBook);
});

module.exports = app;
