import Course from "./Course"
import Content from "./Content"
import Total from "./Total"
import "./App.css"

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]

  return (
    <div>
      <Course course={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
      {/* <p>{exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App