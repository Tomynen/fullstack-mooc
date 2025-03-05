import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(7).fill(0))
  const [mostVoted, setMostVoted] = useState("None")

  const vote = () => {
    const newVotes = [...votes]
    console.log("Votes before: ",votes)
    newVotes[selected] = newVotes[selected] + 1
    setVotes(newVotes)
    calculateMostVoteda()

  }

  function calculateMostVoteda(){
    const maxVotes = Math.max(...votes)
    const maxIndex = votes.indexOf(maxVotes)

    setMostVoted(anecdotes[maxIndex])
  }

  const next = () => {
    const newSelected = selected + 1
    if(newSelected > votes.length - 1){
      const newSelected = 0
    }
    setSelected(newSelected)
  }

  const arvoAnekdootti = () => {
    const arvottu = Math.floor(Math.random() * anecdotes.length)
    setSelected(arvottu)
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <button onClick={vote}>Vote</button>
      <button onClick={next}>Next</button>
      <br />
      <button onClick={arvoAnekdootti}>Arvo anekdootti</button>
      <br />
      <h1>Anecdote with most votes</h1>
      <p>{mostVoted}</p>
    </div>
  )
}

export default App