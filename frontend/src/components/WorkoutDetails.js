const WorkoutDetails = ({workout}) => {
    return(
        <div className ="workout-details">
            <h4>{workout.title}</h4>
            <p><strong>Load (lb)</strong> {workout.load}</p>
            <p><strong> Repos:</strong>{workout.reps}</p>
            <p>{workout.createdAt}</p> 
        </div>
    )
}
export default WorkoutDetails