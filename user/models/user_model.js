// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const UserSchema = new Schema({
//   name: String,
//   type: { type: String, default: "user" },
//   createdAt: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model("User", UserSchema);


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    firstName: {
        type: String,
        required: false
    },
    lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    picture: {
        type: String
    },
    dateOfBirth: {
        type: Date,
        default: Date.now
    },
    sex: {
        type: String
    },
    clubName: {
        type: String
    },
    country: {
        type: String
    },
    rating: {
        type: String
    },
    ratingByClub: {
        type: String
    },
    intro: {
        type: String
    },
    phone: {
        type: Number
    },
    isOrganizer: {
        type: Boolean
    }
});

module.exports = User = mongoose.model('users',UserSchema);