import { fetchWeatherApi } from "openmeteo"
import { useEffect } from "react";

const SelectedCountry = ({country}) => {

    useEffect(() => {

        console.log("helou from useEffect selectedCountry")
        const fetchData = async () => {
            if(country){
                const params = {
                    "latitude": country.latlng[0],
                    "longitude": country.latlng[1],
                    "hourly": "temperature_2m"
                };
            
                const url = "https://api.open-meteo.com/v1/forecast"
                const responses = await fetchWeatherApi(url, params)
                console.log(responses[0])
            }
        } 
        fetchData()


    },[country]) 

    

    if(country === null){
        return null
    }

    return(
        <div style={{ position: "relative", height: "200px" }}>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area}</p>
            <h1>Languages</h1>
            <ul>
                {Object.entries(country.languages).map(([key, value]) => 
                (<li key={key}>{value}</li>)
                )}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
            <h2>Coat of Arms</h2>
            <img src={country.coatOfArms.png} alt="" style={{ width: "300px", height: "auto", position: "absolute",
      top: "0",
      right: "0" }} />
        </div>
    )
}

export default SelectedCountry