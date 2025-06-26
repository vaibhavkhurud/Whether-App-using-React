import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import Temp from './Temp';
function WhetherApp() {

    const [whetherInfo, setWhetherInfo] = useState({
        country: "IN",
        feelsLike: 25.37,
        humidity: 79,
        city: "Vaijapur",
        pressure: 1002,
        temp: 24.68,
        tempMax: 24.68,
        tempMin: 24.68,
        whether: "",
        windspeed: 4.53,
    });

    let updateInfo = (newInfo) =>{
        setWhetherInfo(newInfo);
    }

    return (
        <div>
            <SearchBox updateInfo={updateInfo} />
            <Temp info={whetherInfo} />
            <InfoBox info={whetherInfo} />
        </div>
    )
}

export default WhetherApp