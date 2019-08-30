const express = require('express');
const router = express.Router();
const app =  express();


app.use(express.static(__dirname + '/client/build'));

/* GET home page. */
app.get("/", (req, res) =>{ 
  // res.json({ msg: "Posts Works" })
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
});

app.all("/*", (req, res) =>{ 
  res.sendFile(path.join(__dirname, '/client/build/index.html'))
});



const port=3000;
app.listen(port, () => {
    console.log(`app is running on port: ${port}`);
})