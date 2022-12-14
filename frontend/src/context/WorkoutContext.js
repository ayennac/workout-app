import { createContext, useReducer } from 'react'


//WorkoutsContext object whose value
export const WorkoutsContext = createContext()


export const workoutsReducer = (state, action) => {
    switch(action.type){
        case 'SET_WORKOUTS': 
            return {
                workouts:action.payload
            }
        case 'CREATE_WORKOUT':
            return {
                workouts: [action.payload, ...state.workouts]
            }
        case 'DELETE_WORKOUT':
            return{
                workouts: state.workouts.filter(workout => workout._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const WorkoutsContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(workoutsReducer, {
        workouts:null
    })

    /*Dispatch:
    type: is the type of change that we will see
    in all CAPS to the workouts state
    payload: presents the data we need to make this change
    dispatch({type: 'SET_WORKOUTS', payload: [{}, {}]})
    */    

    return(
        <WorkoutsContext.Provider value ={{...state, dispatch}}>
            {children}
        </WorkoutsContext.Provider>
    )
}

//the children in this case is the root app component App.js

