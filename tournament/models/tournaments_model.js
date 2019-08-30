const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tournamentSchema = new Schema({
  name: String,
  detail: String,
  category: String,
//   type: { type: String, default: "tournament" },
//   createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Tournament", tournamentSchema);


// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// //Create Schema
// const TournamentSchema = new Schema({
//     name: {
//         type: String
//     },
//     detail: {
//         type: String
//     },
//     category: {
//         type: String
//     }
//     // tournamentName: {
//     //     type: String,
//     // },
//     // OrganizerName: {
//     //     type: String,
//     // },
//     // streetAddress: {
//     //     type: String,
//     // },
//     // city: {
//     //     type: String,
//     // },
//     // state: {
//     //     type: String,
//     // },
//     // zipCode: {
//     //     type: Number
//     // },
//     // regStartDate: {
//     //     type: Date,
//     //     default: Date.now
//     // },
//     // regEndDate: {
//     //     type: Date,
//     //     default: Date.now
//     // },
//     // regStartTime: {
//     //     type: String,
//     // },
//     // regEndTime: {
//     //     type: String,
//     // },
//     // timeZone: {
//     //     type: String,
//     // },
//     // division: [
//     //     {
//     //       nameOfDivision: {
//     //         type: String,
//     //       },
//     //       slotsAvailable: {
//     //         type: Number,
//     //       },
//     //       waitingSlots: {
//     //         type: Number,
//     //       },
//     //       bracketType: {
//     //         type: String,
//     //       },
//     //       entryFee: {
//     //         type: String
//     //       },
//     //     }
//     // ],
//     // venueImage: {
//     //     type: String,
//     // },
//     // venueDescription: {
//     //     type: String,
//     // },
//     // tournamentDescription: {
//     //     type: String,
//     // },
//     // tournamentRules:{
//     //     type: String
//     // },
//     // refundPolicy:{
//     //     type: String
//     // },
//     // hotelDiscounts:{
//     //     type: String
//     // },
//     // userId: {
//     //     type: String,
//     // },
//     // isPublished: {
//     //     type: Boolean
//     // },
//     // isDraft: {
//     //     type: Boolean
//     // }

// });

// module.exports = Tournament = mongoose.model('tournaments',TournamentSchema);