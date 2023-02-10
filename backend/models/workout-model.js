const mongoose = require('mongoose')

const Schema = mongoose.Schema

// Mongoose Schema Types: https://mongoosejs.com/docs/schematypes.html
// https://zellwk.com/blog/mongoose-population/
/*
So, separate collections are good if you need to select individual documents, 
need more control over querying, or
 have huge documents.

Embedded documents are good when you want the entire document,
 the document with a $slice of comments,
  or with no comments at all.

*/

/* Example of a schema with embedded 
subdocument:
https://stackoverflow.com/questions/39596625/nested-objects-in-mongoose-schemas

*/


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
    },
    user_id:{
        type: String, 
        requried: true
    }
}, { timestamps: true })
//Model
// the model apply the schema to a particular model and then we use the model to interact with a collection of that name

module.exports = mongoose.model('Workout', workoutSchema)
//make it singular
