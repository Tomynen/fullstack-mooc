import Course from "./Course"
import Content from "./Content"
import Total from "./Total"
import "./App.css"

const App = () => {
  const course = {
    
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  } 

  return (
    <div>
      <Course course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
      {/* <p>{exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App