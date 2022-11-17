const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Mongoose Schema Types: https://mongoosejs.com/docs/schematypes.html

//Schema
//defines the structure of the type of document in our datbase
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })
//Model
// the model apply the schema to a particular model and then we use the model to interact with a collection of that name

module.exports = mongoose.model('Workout', workoutSchema)
//make it singular
