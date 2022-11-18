import { WorkoutsContext } from '../context/WorkoutContext'
import { useContext } from 'react'

export const useWorkoutsContext = () =>{
    const context = useContext(WorkoutsContext)
    //this hook returns the value of this context which is provided on 
    //line 36 of WorkoutsContext.js

    if(!context){
        throw Error('useWOrkoutsContext must be used inside and Workouts Context RPovider ')
    }

    return context
}