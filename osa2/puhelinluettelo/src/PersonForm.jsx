
const PersonForm = ({onChangeName, onChangeNumber, nameValue, numberValue}) => {

    return (
        <>
            name: <input onChange={onChangeName} value={nameValue}/>
            <br />
            phone number: <input onChange={onChangeNumber} value={numberValue} />
        </>
    )
}

export default PersonForm