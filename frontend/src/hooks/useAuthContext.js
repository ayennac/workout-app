import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

export const useAuthContext = () =>{
    const context = useContext(AuthContext)
    //this hook returns the value of this context which is provided on 
    //line 36 of AuthContext.js
    
    if(!context){
        throw Error('useAuthContext must be used inside and Workouts Context RPovider ')
    }

    return context
}