import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function SearchBox({updateInfo}) {
 
    let [city, setCity] = React.useState();
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "736226f10682178c8de1e55763aecf95";

    let getWhetherInfo = async () => {
       let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
      
       let result = {
        temp: jsonResponse.main.temp,
        city: jsonResponse.name,
        country: jsonResponse.sys.country,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        pressure: jsonResponse.main.pressure,
        windspeed: jsonResponse.wind.speed,
        whether: jsonResponse.weather[0].description,
       }
         console.log(result);
         return result;
    }


    let handleChange = (evt) => {
        setCity(evt.target.value)
    }

    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log("City searched:", city);
        setCity(""); 
       let newInfo = await getWhetherInfo();
       updateInfo(newInfo);
    }


  return (
   <>
   <div className='SearchBox'>
    <h2>Whether App</h2>
   <form  onSubmit={handleSubmit}>
   <TextField 
   
   id="city"
   label="Search City" 
   variant="outlined"
   value={city}
   onChange={handleChange} />
   <br /><br />
   <Button  variant="contained" type='submit'>
        Search
      </Button>
      </form>
   </div>

   </>
  )
}

export default SearchBox