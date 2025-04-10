const FilteredCountries = ({countries}) => {
    if(countries.length > 10){
        return(
            <p>Too many countries {countries.length} with the filter add more search text</p>
        )
    }else if(!countries || countries.length == 0)
    {
        return null
    }
    else{
        return(
            <>
                <ul>
                    {countries.map(c => <li key={c.name.common}>{c.name.common}</li>)}
                </ul>
            </>
        )
    }
}

export default FilteredCountries