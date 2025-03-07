import { useState } from 'react'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phoneNumber: '040-123456' },
    { name: 'Ada Lovelace', phoneNumber: '39-44-5323523' },
    { name: 'Dan Abramov', phoneNumber: '12-43-234345' },
    { name: 'Mary Poppendieck', phoneNumber: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const newNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const newPhoneNumberHandler = (event) => {
    setNewPhoneNumber(event.target.value)
  } 

  const filterValueHandler = (event) => {

    console.log("tidi")
    setFilterValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personsWithFilter = persons.filter(person => person.name == newName)
    if(personsWithFilter.length > 0){
      alert(`${newName} is already added to the phonebook`)
    }else{
      const newPersons = persons.concat({name: newName, phoneNumber: newPhoneNumber})
      setPersons(newPersons)
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  // const handleSubmitTernary = (event) => {
  //   event.preventDefault()
  //   const newPersons = persons.filter(person => person.name == newName).length > 0 ? alert("Exists") : persons.concat({name: newName})
  //   setPersons(newPersons)
  //   setNewName('')
  // }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Filter onChange={filterValueHandler} value={filterValue}/>
          <h1>Add a new</h1>
          {/* name: <input onChange={newNameHandler} value={newName}/>
          <br />
          phone number: <input onChange={newPhoneNumberHandler} value={newPhoneNumber} /> */}
        </div>
        <PersonForm onChangeName={newNameHandler} nameValue={newName} onChangeNumber={newPhoneNumberHandler} numberValue={newPhoneNumber}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue}/>
    </div>
  )

}

export default App