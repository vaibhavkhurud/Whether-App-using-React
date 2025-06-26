import React from 'react'
import InfoBox from './InfoBox'
import SearchBox from './SearchBox'
import Sun_cloud from '../img/Sun_cloud.png'
import Rain from '../img/Rain.png'
import Cold from '../img/Cold.png'
function Temp({ info }) {

  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;


  return (<>
  <div className='City'>
          <h2>{info.city}, {info.country}</h2>
          <h3>Date : {date}</h3>
    
        </div>
  
  <div className='Temp'>
     
    <div className='sun-temp' >
        <img src={info.humidity > 80 ? Rain : info.temp > 15 ? Sun_cloud : Cold} alt="SunCloud" />
        <h2>{info.temp}&deg;C</h2>
    </div>
        <p>Min: {info.tempMin}&deg;C / Max: {info.tempMax}&deg;C</p>
    </div>
    </>
  )
}


export default Temp