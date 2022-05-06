//require the installed packages

const express = require("express");
const cors = require("cors");
const mongoose = require ("mongoose");
const res = require("express/lib/response");


const App = express();
require("dotenv").config();

//middlewares

App.use(cors());
App.use(express.json());

//variables

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || "mongodb://localhost/tizi";

App.listen(port,() =>{
    console.log(`Server is running on port : ${port}`)
})
//connecting to database
mongoose.connect(db,
    {
     useNewUrlParser:true,
     useUnifiedTopology : true
    },
     (err) => {
        err
          ? console.log(`there is a problem: ${err.message}`)
          : console.log("DB successfully connected");
      });



