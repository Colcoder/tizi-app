
const User = require("../models/userModel");
const express =require("express");

const router = express.Router();



//Fetching all users from the database
router.route("/").get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json(`There was an error: ${err.message}`));
});

//Adding user to the database
router.route("/add").post((req,res) =>{
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
           .then(() => res.json("User added successfully!!"))
           .catch(err => res.status(400).json(`There was an error:${err.message}`))
});

module.exports = router;

