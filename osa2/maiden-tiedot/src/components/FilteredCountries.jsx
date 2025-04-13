const FilteredCountries = ({countries, countryClickHandler}) => {
    if(countries.length > 10){
        return(
            <p>Too many countries {countries.length} with the filter add more search text</p>
        )
    }else if(countries.length < 2)
    {
        return null
    }
    else{
        return(
            <>
                <ul>
                    {countries.map(c => {
                        return(
                            <>
                                <li key={c.name.common}>{c.name.common}
                                <button onClick={() => countryClickHandler(c.name.common)}>Show</button>
                                </li>
                                
                            </>
                            
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default FilteredCountries