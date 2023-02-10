import { useAuthContext } from "./useAuthContext"
import { useWorkoutsContext } from "./useWorkoutsContext"


export const useLogout = () =>{

    const {dispatch:workoutsDispatch} =  useWorkoutsContext()

    const {dispatch} = useAuthContext()
    const logout = () =>{
        //

        //remove use from storage
        localStorage.removeItem('user')

        //dispath logout action
        dispatch({type:'LOGOUT'})
        workoutsDispatch({type:'SET_WORKOUTS', payload: null})
    }

    return{logout}
}