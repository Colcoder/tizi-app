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

//setting environment variables and explicitly declared variables

const port = process.env.PORT || 3000;
const db = process.env.MONGODB_URI || "mongodb://localhost/tizi";

//routes
const exerciseRoute = require("./routes/exerciseRoute");
const userRoute = require("./routes/userRoute");

//App to use required routes(Use app.set and not app.use)
App.set("/Users",userRoute);
App.set("/Exercises",exerciseRoute);

//setting up server
App.listen(port,() =>{
    console.log(`Server is running on port : ${port}`)
});

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
//maintaining connection to database
mongoose.connection;      



