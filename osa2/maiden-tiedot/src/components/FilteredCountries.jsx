const FilteredCountries = ({countries}) => {

    // if(countries.length == 1){
    //     return null
    // }
    console.log(countries[0])
    if(countries.length > 10){
        return(
            <p>Too many countries with the filter add more search text</p>
        )
    }else{
        return(
            <>
                <ul>
                    {countries.map(c => {
                        <li>{c.name.common}</li>
                    })}
                </ul>
            </>
        )
    }
}

export default FilteredCountries