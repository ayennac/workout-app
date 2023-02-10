const mongoose = require('mongoose')
const Workout = require('../models/workout-model.js')


//get all workouts
const getWorkouts = async(req,res) => {
    const user_id = req.user._id

    const workouts = await Workout.find({user_id}).sort({createdAt: -1})
    res.status(200).json(workouts)
}

//get a single workout

const getWorkout = async(req,res) =>{
    const {id} = req.params
    
    //will return a null if it cannot find the ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No workout found' })
    }
    const workout = await Workout.findById(id)
    if(!workout){
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json({workout})
}

//create a new workout
const createWorkout = async(req, res) =>{

    //add doc to db
    const {title, load, reps} = req.body
    try {
        const user_id = req.user._id
        const workout = await Workout.create({title, load, reps, user_id})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({ error: error.message})
    }
}
 
//delete a workout
const deleteWorkout = async(req, res) => {
    const {id} = req.params

    //will return a null if it cannot find the ID
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No workout found' })
    }
    
    const workout = await Workout.findOneAndDelete({_id:id})

    if(!workout){
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json(workout)

}

//update a workout
const updateWorkout = async(req, res) =>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No workout found' })
    }
    const workout = await Workout.findOneAndUpdate({_id:id}, {
        ...req.body
    })

    if(!workout){
        return res.status(404).json({error: 'No workout found'})
    }

    res.status(200).json(workout)
}


module.exports ={
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}