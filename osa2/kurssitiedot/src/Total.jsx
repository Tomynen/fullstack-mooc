

const Total = (props) => {
    
    let totalExercises = 0
    props.parts.forEach(part => {
        totalExercises += part.exercises
    })

    const totalExercisesReduce = props.parts.reduce((aggre, currentValue) => {
        console.log("Aggre: ",aggre)
        console.log("Current value: ", currentValue)
        return(
            aggre + currentValue.exercises
        )
    },0)
    return(
        <>
            <p>Total exercises: {totalExercises}</p>
            <p>Total exercises with reduce: {totalExercisesReduce}</p>
        </>
    )
}

export default Total