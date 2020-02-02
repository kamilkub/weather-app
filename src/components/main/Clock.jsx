import React, {useState, useEffect} from 'react';


export default function Clock() {

    let imageUrl = "./images/times/";

    const [image, setImage] = useState(""); 
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();


    setTimeout(() => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
   }, 1000);
   
    function changeImageState() {
        var image = new Date().getHours() > 6 && new Date().getHours() < 18 ?  imageUrl+'morning_128.png' : imageUrl+'night_124.png';
        setImage(image);
    }

    useEffect(() => {
        changeImageState();
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
   }, []);

    
    return (
            <div className="clock-place">
                <img src={image} alt="happy-logo" />
                  <span className="hours">{ hours }</span><span style={{fontSize:"500%"}}>.</span>
                  <span className="minutes">{ minutes < 10 ? "0"+minutes : minutes }</span>
            </div>
    );
}