import './SuccessNotification.css'

const SuccessNotification = ({ message }) => {

    console.log(message)

    if(message === null){
        console.log("Returning null")
        return null
    }

    console.log("Returnin error message")
    return(
        
        <div className='divi'>
            {message}
        </div>
    )
}

export default SuccessNotification