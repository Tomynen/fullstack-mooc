import Person from "./Person"

const Persons = ({persons, filterValue, deletePersonHandler}) => {

    return(
        <ul>
          {persons.filter(person => person.name.toLocaleLowerCase().includes(filterValue.toLowerCase()))
            .map(person => (
            <Person key={person.id} name={person.name} phoneNumber={person.phoneNumber} id={person.id} deletePersonHandler={deletePersonHandler}/>
          ))}
            
        </ul>
    )
}

export default Persons

{/* 
// .map(person => 
        // <li key={person.name}>
        //   Name: {person.name} - {person.phoneNumber}
        //   <button onClick={() => deletePersonHandler(person.id)}>X</button>
        // </li>)} */}