

const Persons = ({persons, filterValue}) => {

    return(
        <ul>
        {persons.filter(person => person.name.toLocaleLowerCase().includes(filterValue.toLowerCase()))
        .map(person => <li key={person.name}>Name: {person.name} - {person.phoneNumber}</li>)}
      </ul>
    )

}

export default Persons