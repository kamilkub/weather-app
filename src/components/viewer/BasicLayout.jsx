import Button from '../main/form/Button';
import Input from '../main/form/Input';
import Clock from '../main/form/Clock';
import WeatherService from '../../service/WeatherService';
import React from 'react';
import { Redirect } from 'react-router-dom'



export default function BasicLayout(props) {
  
    const [cityName, setCityName] = React.useState();
    const [isSearched, setIs] = React.useState(false);
    const [isEmpty, setEmpty] = React.useState(false);

    function sendData(data) {
        props.callBackMethod(data);
    }

    
    function cacheCity(event) {
        const value = event.target.value;
        setCityName(value);
    }

    
   function getWeather() {
       if(cityName === undefined){
          setEmpty(true);
       } else {
        const data = WeatherService.getWeatherByCityName(cityName);
        sendData(data);
        setIs(true);
       }
    
    }

  return (
 
      <div className="main-content">
          <Clock />
          <div className="form-container-one">
            <Input type="text" name="city" style={isEmpty ? {borderBottom: "3px solid red"} : {}} value={cityName} onChange={cacheCity} ph="City name" />
            <Button text="Get Weather" onClick={getWeather} />
          </div>
          {isSearched ? <Redirect to="/today" /> : ""}
      </div>
  )

}