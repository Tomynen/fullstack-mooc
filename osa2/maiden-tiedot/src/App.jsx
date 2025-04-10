import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import FilteredCountries from './components/FilteredCountries'
import axios from "axios"

function App() {

  const [filterValue, setFilterValue] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

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
  }, [filterValue])

  const onChangeFilter = (event) => {
    setFilterValue(event.target.value)
  }


  return (
    <>
      <Filter onChange={onChangeFilter} value={filterValue}/>
      <FilteredCountries countries={filteredCountries}/>    
    </>
  )
}

export default App
