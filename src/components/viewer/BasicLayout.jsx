import Button from '../main/Button';
import Input from '../main/Input';
import Clock from '../main/Clock';
import React, {useState} from 'react';
import { Redirect } from 'react-router-dom'




export default function BasicLayout(props) {
  
    const [cityName, setCityName] = useState('');
    const [isClicked, setClicked] = useState(false);
    const [validateStyle, setValidateStyle] = useState({});



    function cacheCity(event) {
        const value = event.target.value;
        setCityName(value);
    }

    function sendTodayRequest() {
        if(cityName === ''){
          setClicked(false);
          setValidateStyle({borderBottom: "3px solid red"});
        } else {
          setClicked(true);
        }
    }

  return (
 
      <div className="main-content">
          <Clock />
          <div className="form-container-one">
            <Input type="text" name="city" style={validateStyle} value={cityName} onChange={cacheCity} ph="City name" />
            <Button text="Get Weather" onClick={sendTodayRequest} />
          </div>
          {isClicked ? <Redirect to={"/today?cityName=" + cityName} /> : ""}
      </div> 
  )

}