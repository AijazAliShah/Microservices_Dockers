const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Tournament = require("../models/tournaments_model");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/', (req,res) => res.send('hello world from tournament'));

router.get("/api/v1/gettournaments", async (req, res) => {
    const tournaments = await Tournament.find({});
    res.json(tournaments); 
});

// //post tournament data
router.post("/api/v1/posttournaments", (req, res) => {
    console.log("reqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq")
    console.log(req.body)
    const tournamentData = new Tournament({
    //   _id: new mongoose.Types.ObjectId(),
      name: "req.body.nam",
      detail: "1hi",
      category: "my category"
    
    });
  
    new Tournament(tournamentData)
      .save()
      .then(users => console.log(res.json(users)))
      .catch(err => console.log(err));
  
   });
  
   // //get all tournaments
// app.get('/alltournaments', (req, res) => {
// const errors = {};

// Tournaments.find()
//   .then(tournaments => {
//     res.json(tournaments);
//   })
//   .catch(err => res.status(404).json({ tournaments: 'There are no tournaments' }));
// });

// //get tournament
// app.get('/gettournament', (req, res) => {
//   const errors = {};

//   Users.findOne({ id: req.id })
//     .then(tournament => {
//       res.json(tournament);
//     })
//     .catch(err => res.status(404).json(err));
// }
// );

module.exports = router;
  