import React, {useState, useEffect} from 'react';
import axios from 'axios';
import IconComponent from '../main/IconComponent';
import Description from '../main/Description';


export default function TodayLayout(props) {

    
    let parameter = props.location.search;
    let city = parameter.substring(parameter.indexOf("=")+1, parameter.length);
    const [weatherInfo, setInfo] = useState([]);
    const [isLoaded, setLoaded] = useState(false);
    const [cityName, setCityName] = useState('');
    const [description, setDescription] = useState([]);

    

    useEffect(() => {
        if(city !==  undefined && city !== ''){
            
        axios.get('http://api.openweathermap.org/data/2.5/weather?q=' +city+ '&appid=16c12b13978a32ff973dc4312a2a7746')
        .then(function (response){
           
                const {data} = response;
                const {main} = data;
                const {wind} = data;
                const {clouds} = data;
                const {weather} = data;

                const dataRender = [
                    { image: "wind_64.png", data: wind.speed+" m/s" },
                    { image: "degrees_64.png", data: Math.round(main.temp-273.15)+' \u00b0C'},
                    { image: "cloud_64.png", data: clouds.all+" %"}
                ];

                setDescription(weather[0]);
                setCityName(city);
                setInfo(dataRender);
                setLoaded(true);
                
        
            }).catch(function (error){ 
                setCityName("No such a town found");
                setLoaded(true);
            console.log(error);
        });    
    }
}, []);


    return ( <div className="main-content">
                    <div className="top-content">
                            <img src="./images/icons/town_128.png" />
                            <h1>{isLoaded ? cityName : "Just tap search and specify town!"}</h1>
                    </div>
                    <div className="icon-container">
                        {isLoaded ? weatherInfo.map((element, index) => <IconComponent key={index} src={element.image} data={element.data} /> ) : null }
                    </div>

                    <Description desc={description.description} />
                    
            </div>)
}





// coord
// coord.lon >>                  City geo location, longitude
// coord.lat >>                  City geo location, latitude


// weather 
// weather.id   >>>>             Weather condition id
// weather.main   >>>>           Group of weather parameters (Rain, Snow, Extreme etc.)
// weather.description   >>>>    Weather condition within the group
// weather.icon   >>>>           Weather icon id


// main
// main.temp   >>>>              Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.feels_like   >>>>        Temperature. This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.pressure   >>>>          Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
// main.humidity   >>>>          Humidity, %
// main.temp_min  >>>>           Minimum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.temp_max  >>>>           Maximum temperature at the moment. This is deviation from current temp that is possible for large cities and megalopolises geographically expanded (use these parameter optionally). Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
// main.sea_level  >>>>          Atmospheric pressure on the sea level, hPa
// main.grnd_level  >>>>         Atmospheric pressure on the ground level, hPa


// wind
// wind.speed  >>>>              Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
// wind.deg  >>>>                Wind direction, degrees (meteorological)


// clouds
// clouds.all  >>>>              Cloudiness, %


// rain
// rain.1h  >>>>                 Rain volume for the last 1 hour, mm
// rain.3h  >>>>                 Rain volume for the last 3 hours, mm


// snow
// snow.1h  >>>>                 Snow volume for the last 1 hour, mm
// snow.3h  >>>>                 Snow volume for the last 3 hours, mm


// dt Time of data calculation, unix, UTC
// sys
// sys.type  >>>>                Internal parameter
// sys.id  >>>>                  Internal parameter
// sys.message  >>>>             Internal parameter
// sys.country   >>>>            Country code (GB, JP etc.)
// sys.sunrise  >>>>             Sunrise time, unix, UTC
// sys.sunset  >>>>              Sunset time, unix, UTC
// timezone Shift in seconds from UTC
// id City ID  >>>>           
// name  >>>>                    City name
// cod   >>>>                    Internal parameter