import { useEffect, useState } from 'react'
import axios from 'axios'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import PersonService from './services/persons'
//import './App.css'
import SuccessNotification from './components/SuccessNotification'

const App = () => {

  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setNewPhoneNumber] = useState('')
  const [filterValue, setFilterValue] = useState('')

  const [successMessage, setSuccessMessage] = useState(null)

  useEffect(() => {
    PersonService.getAll()
    .then(response => setPersons(response))
  }
  ,[])

  const deletePersonHandler = (id) => {
    const personToBeDeleted = persons.find(p => p.id == id)

    const requ = PersonService.deletePerson(id)

    setSuccessMessage(`Deleted a note ${personToBeDeleted.name}`)
    setTimeout(() => {
      setSuccessMessage(null)
    }, 5000)

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
          .then( response => {
            setSuccessMessage(`Updated person with the name ${updatedPerson.name}`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 4000);
          })
          .catch(error => {
            setSuccessMessage(`${updatedPerson.name} has already been deleted`)
            setTimeout(() => {
              setSuccessMessage(null)
            }, 4000);
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
          setSuccessMessage(`Added ${person.name}`)
        })
    }
    setNewName('')
    setNewPhoneNumber('')
  }

  return (
    <div>
      <SuccessNotification message={successMessage}/>  
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