require('dotenv').config()


const express = require('express')

const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

const mongoose = require('mongoose')



//Initializing an express app
const app = express()




//Middleware function that will fire anytime a request comes in 

///with this middleware, it will look for the data in the body of a request
app.use(express.json([]));

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
  })

//Routes 
//Specifying the path, when we fire a request to '/api/workouts.. then it will head into the workoutRoutes to find the correct route
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)


  
// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() =>{
    //Listening for requests
    console.log('connected to database')
    app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT)
    })
})
.catch((error) => {
    console.log(error)
})



//If you want this server to run continuously,
//downloand nodemon and run it with 'nodemon server.js'


//To attach an 'npm run' command that includes 'noemon server.js'
//add it to the package.json file