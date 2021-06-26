const router = require('express').Router();


const workoutRoutes = require('./workouts-routes');

router.use('/', workoutRoutes);

module.exports = router;