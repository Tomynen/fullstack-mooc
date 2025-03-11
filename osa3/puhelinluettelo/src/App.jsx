import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './Persons'
import Filter from './Filter'
import PersonForm from './PersonForm'
import PersonService from './services/persons'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  useEffect(() => {
    PersonService.getAll()
    .then(response => setPersons(response))
  }
  ,[])

  const deletePersonHandler = (id) => {
    const requ = PersonService.deletePerson(id)
    const updatedPersons = persons.filter(person => person.id !== id) 
    setPersons(updatedPersons)
  }

  const newNameHandler = (event) => {
    setNewName(event.target.value)
  }

  const newPhoneNumberHandler = (event) => {
    setNewPhoneNumber(event.target.value)
  } 

  const filterValueHandler = (event) => {
    setFilterValue(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const personsWithFilter = persons.filter(person => person.name == newName)
    if(personsWithFilter.length > 0){
      if(confirm("Person with that name already exists, do you want to change phonenumber?"))
      {
        const updatedPerson = {...personsWithFilter[0], phoneNumber: newPhoneNumber} 
        PersonService.update(updatedPerson.id,updatedPerson)
          .then(response => {
            const updatedPersons = persons.filter(person => person.id !== response.id).concat(updatedPerson)
            setPersons(updatedPersons)
          })
        setNewName('')
        setNewPhoneNumber('')
      }
    }else{
      const person = {name: newName, phoneNumber: newPhoneNumber}

      PersonService.create(person)
        .then(response => {
          const updatedPersons = persons.concat(response)
          setPersons(updatedPersons)
        })
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <Filter onChange={filterValueHandler} value={filterValue}/>
          <h1>Add a new</h1>
        </div>
        <PersonForm onChangeName={newNameHandler} nameValue={newName} onChangeNumber={newPhoneNumberHandler} numberValue={newPhoneNumber}/>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Persons persons={persons} filterValue={filterValue} deletePersonHandler={deletePersonHandler}/>
    </div>
  )

}

export default App