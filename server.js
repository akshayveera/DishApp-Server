
// import express
const express = require("express");
const app = express();

// import db
const db = require("./db");

// import and allow cors
const cors = require("cors");
app.use(cors(
    {
        origin: 'https://dishapp-server.onrender.com';
    }
));

// import and use body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// import and use endpoints
const dishRoutes = require("./routes/dishRoutes");
app.use('/', dishRoutes);

// listen to the some port
app.listen(3000, ()=>{
    console.log("server is live at port no. 3000");
})

