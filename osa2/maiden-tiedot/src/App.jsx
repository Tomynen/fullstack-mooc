import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'
import axios from "axios"
import SelectedCountry from './components/SelectedCountry'
function App() {

  const [filterValue, setFilterValue] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {
        setCountries(response.data)
      })
      .catch(error => {
        console.log("GET all countrie epäonnistui!")
      })
  }, [])

  useEffect(() => {
    const filtered = countries.filter(c => c.name.common.toLowerCase().includes(filterValue))
    setFilteredCountries(filtered)
    console.log(filteredCountries.length)
    if(filtered.length == 1){
      setSelectedCountry(filtered[0])
    }
    else{
      setSelectedCountry(null)
    }
  }, [filterValue])

  const onChangeFilter = (event) => {
    setFilterValue(event.target.value)
  }


  return (
    <>
      <Filter onChange={onChangeFilter} value={filterValue}/>
      <SelectedCountry country={selectedCountry} /> 
      <FilteredCountries countries={filteredCountries}/>    
    </>
  )
}

export default App
