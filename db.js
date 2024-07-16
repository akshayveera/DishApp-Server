
// import mongoose
const mongoose = require("mongoose");

require("dotenv").config();

// define mongodb URL
// const mongoURL = "mongodb://127.0.0.1:27017/dishesapp";
const mongoURL = process.env.MONGODB_URL;

// setup monogdb connection
mongoose.connect(mongoURL);

// access default connection object
const db = mongoose.connection;

// add event handlers
db.on("connected", ()=>{console.log("mongodb connected")});
db.on("error", (err)=>{console.log(`error occured ${err}`)});
db.on("disconnected", ()=>{console.log("mongodb disconnected")});

// export db connection object
module.exports = db;
