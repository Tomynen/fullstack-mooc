

const Total = (props) => {
    
    let totalExercises = 0
    props.parts.forEach(part => {
        totalExercises += part.exercises
    })
    return(
        <>
            <p>Total exercises: {totalExercises}</p>
        </>
    )
}

export default Total