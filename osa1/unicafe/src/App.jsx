
import { useState } from 'react'
import Button from './Button'
import Heading from './Heading'
import Statistics from './Statistics'
import "./App.css"

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const setGoodHandler = () => {
    const newGood = good + 1
    setGood(newGood)
    const newAll = newGood + bad + neutral
    setAll(newAll)

    const newAverage = (newGood * 1 - bad * 1)  / newAll
    setAverage(newAverage) 

    const newPositive = newGood / newAll * 100
    setPositive(newPositive)
  }

  const setNeutralHandler = () => {
    const newNeutral = neutral + 1
    setNeutral(newNeutral)
    const newAll = good + bad + newNeutral
    setAll(newAll)

    const newAverage = (good * 1 - bad * 1)  / newAll
    setAverage(newAverage) 

    const newPositive = good / newAll * 100
    setPositive(newPositive)
  }
  
  const setBadHandler = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newAll = good + newBad + neutral
    setAll(newAll)

    const newAverage = (good * 1 + newBad * -1)  / all
    setAverage(newAverage)
    
    const newPositive = good / newAll * 100
    setPositive(newPositive)

  }

  return (
    <div>
      <Heading title="Reviews"></Heading>
      <Button onClick={setGoodHandler} name='Good' />
      <Button onClick={setNeutralHandler} name='Neutral' />
      <Button onClick={setBadHandler} name='Bad' />

      <Heading title="Statistics" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
    </div>
  )
}

export default App