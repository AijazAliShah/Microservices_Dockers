const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/user_model");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req,res) => res.send('hello world from user'));

router.get("/api/v1/getuser", async (req, res) => {
    const tournaments = await User.find({});
    res.json(tournaments); 
});

// //post tournament data
router.post("/api/v1/postuser", (req, res) => {
    console.log("reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    console.log(req.body)
    const tournamentData = new User({
    //   _id: new mongoose.Types.ObjectId(),
      // firstName: req.body.firstName,
      firstName: "Aijaz",
      // lastName: req.body.lastName,
      lastName: "Ali"
    
    });
  
    new User(tournamentData)
      .save()
      .then(users => console.log(res.json(users)))
      .catch(err => console.log(err));
  
   });
  
// //post user data
// router.post("/postuser", (req, res) => {
//   const profileFields = req.body;
//   console.log("before mongo post call////////////////////////")
//   new Users(profileFields).save().then(users =>  console.log(res.json(users)));
//   console.log("after mongo post call/////////////////////////")
  
//   Users.save()
//   .then(item => {
//    res.send("user saved to database");
//   })
//   .catch(err => {
//   res.status(400).send("unable to save user to database");
//   });
//  });


// //get user data
// router.get('/getuser', (req, res) => {
//     const errors = {};

//     Users.findOne({ id: req.user.id })
//       .then(user => {
//         res.json(user);
//       })
//       .catch(err => res.status(404).json(err));
//   }
// );

// //get all players
// router.get('/allplayers', (req, res) => {
//   const errors = {};

//   Users.find()
//     .then(users => {
//       res.json(users);
//     })
//     .catch(err => res.status(404).json({ users: 'There are no players' }));
// });


module.exports = router;
  