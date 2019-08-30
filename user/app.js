const express = require('express');
const router = express.Router();
const app =  express();
const mongoose = require("mongoose");

const owners = require('./routes/index');

mongoose 
  .connect("mongodb+srv://aijazali333:abcbnm123@cluster0-dlqz8.gcp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use('/', owners);

const port=3000;
app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
})