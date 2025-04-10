

const Person = ({name, id, phoneNumber, deletePersonHandler}) => {

    return(
        <li key={name}>
          Name: {name} - {phoneNumber}
          <button onClick={() => deletePersonHandler(id)}>X</button>
        </li>
    )}


export default Person