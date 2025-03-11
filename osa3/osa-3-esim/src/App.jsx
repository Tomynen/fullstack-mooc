import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Notes from './Notes'
import Note from './Note'
import noteService from './services/notes'


function App() {
  const [count, setCount] = useState(0)

  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')

  const toggleImportanceOf = (id) => {
    const noteToChange = notes.find(note => note.id === id)
    const updatedNote = {...noteToChange, important: !noteToChange.important}
    
    noteService.update(id, updatedNote)
      .then(response => {
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
      .catch(error => {
        alert(
          `the note '${note.content}' was already deleted from server`
        )
        setNotes(notes.filter(note => note.id !== id))
      })
  }


  const handleNewNameChange = event => {
    setNewNote(event.target.value)
  }

  const addNote = event => {
    event.preventDefault()
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5
    }
    noteService.create(noteObject)
      .then(response => {
        console.log(response)
        const newNotes = notes.concat(noteObject)
        setNotes(newNotes)
        setNewNote('')
      })
      .catch(error => {
        console.log("Error occured kek")
      })
  }

  useEffect(() => {
    console.log("Effect")
    noteService.getAll()
      .then(response => {
        setNotes(response.data)
      })
  },[])

  return (
    <>
      <h1>Notes</h1>
      <ul>
        {notes.map(note => <Note key={note.id} note={note} toggleImportance={() => toggleImportanceOf(note.id)}/>)}
      </ul>
      
      <br />
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNameChange} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default App
