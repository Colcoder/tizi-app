const express = require("express");
const Exercise = require("../models/exerciseModel");


const router = express.Router();

//fetching exercises from the database
router.route("/").get((req,res) => {
    Exercise.find()
            .then(exercises => res.json(exercises))
            .catch(err => res.status(400).json(`There was an error:${err.message}`));
});

//adding exercise to the database
router.route("/add").post((req,res) => {
    const exerciseName = req.body.exerciseName;
    const Duration = Number(req.body.Duration);
    const date = Date(req.body.date);
    const description = req.body.description;
    const venue = req.body.venue;

    const newExercise = new Exercise({
        exerciseName,
        Duration,
        date,
        description,
        venue
    });

    Exercise.bulkSave()
            .then(() => res.json("Exercise added successfully!!"))
            .catch(error => res.status(400).json(`Oops!! there was an error ${err.message}`));
});