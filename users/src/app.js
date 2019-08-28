const express = require("express");
const Video = require("./models/video_model");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ msg: "users" });
});

app.get("/api/v1/users", async (req, res) => {
  const users = await Video.find({});
  res.json(users);
});

app.post("/api/v1/users", async (req, res) => {
  const users = new Video({ name: req.body.name });
  const savedVideo = await users.save();
  res.json(savedVideo);
});

module.exports = app;
