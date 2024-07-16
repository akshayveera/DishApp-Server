
// import db
const mongoose = require("mongoose");
const db = require("../db");

// define mongoose schema
const dishSchema = new mongoose.Schema({
    dishName : {
        type : String,
        required : true
    },
    dishId : {
        type : String,
        unique : true,
        required : true
    },
    imageUrl : {
        type : String,
        required : true
    },
    isPublished : {
        type : Boolean,
        required : true
    }
});


// create and export person model
const Dish = db.model("dish", dishSchema );
module.exports = Dish;