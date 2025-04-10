
const PersonForm = ({onChangeName, onChangeNumber, nameValue, numberValue}) => {

    return (
        <div className='personForm'>
            name: <input onChange={onChangeName} value={nameValue}/>
            <br />
            phone number: <input onChange={onChangeNumber} value={numberValue} />
        </div>
    )
}

export default PersonForm