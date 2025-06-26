import React from 'react'

import Cards from './Cards'
import Wind from '../img/Wind.png'
import FeelsLike from '../img/FeelsLike.png'
import Humidity from '../img/Humidity.png'
import Pressure from '../img/Pressure.png'
// import Temp from './components/Temp'

function InfoBox({info}) {

 


  return (<div className='InfoBox'>
   

   
    <div className='Cards'>
      <Cards icon={Wind} text="Wind Speed" data={info.windspeed} unit= 'km/h'/>
      <Cards icon={Humidity} text="Humidity" data={info.humidity} unit='%' />
      <Cards icon={FeelsLike} text="Feels Like" data={info.feelsLike} unit='°C' />
      <Cards icon={Pressure} text="Pressure" data={info.pressure} unit='hPa' />
    </div>
  </div>
  )
}

export default InfoBox