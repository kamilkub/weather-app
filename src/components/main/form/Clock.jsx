import React from 'react';


export default function Clock() {

    let imageUrl = "./images/times/";

    
    const [hours, setHours] = React.useState();
    const [minutes, setMinutes] = React.useState();
    const [seconds, setSeconds] = React.useState();

    setTimeout(() => {
         setHours(new Date().getHours());
         setMinutes(new Date().getMinutes());
         setSeconds(new Date().getSeconds());
    }, 1000);

    return (
            <div className="clock-place">
                <img src={hours > 6 && hours < 18 ? imageUrl+'morning_128.png' : imageUrl+'night_124.png'} alt="happy-logo" />
                  <span className="hours">{hours}</span><span style={{fontSize:"500%"}}>.</span>
                  <span className="minutes">{minutes < 10 ? "0"+minutes : minutes}</span>
            </div>
    );
}