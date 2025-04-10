

const Filter = ({onChange, value}) => {

    return(
        <div className="filter">
            filter shown with <input onChange={onChange} value={value} />
        </div>
    )
}

export default Filter