const router = require("express").Router();
const Workout = require("../models/workouts.js")
const mongoose = require("mongoose");
const express = require("express");

    router.get("/api/workouts",function(req,res){  
        Workout.find()
        .then(dbWorkout =>{  
            res.json(dbWorkout)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    router.post("/api/workouts",function ({body},res){    
        Workout.create({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    router.get("/api/workouts/range",function(req,res){  
        Workout.find()
        .then(dbWorkout =>{  
            res.json(dbWorkout)
        })
        .catch(err => { 
            res.json(err)
        })
    });


    router.post("/api/workouts/range",function (req,res){    
        Workout.create({})
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

    router.put("/api/workouts/:id",({body,params},res)=>{   
        Workout.findByIdAndUpdate(  
         params.id,
         {$push:{exercises:body} },
         {new: true, runValidators:true }
        )
        .then(dbWorkout => res.json(dbWorkout))
        .catch(err => { 
            res.json(err)
        })
    });

module.exports = router;