const Filter = ({onChange, value}) => {

    return (
        <>
            Filter shown country <input onChange={onChange} type="text" value={value} />
        </>
    )

}

export default Filter