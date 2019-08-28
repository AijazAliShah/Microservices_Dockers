const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  type: { type: String, default: "tournament" },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Book", tournamentSchema);
