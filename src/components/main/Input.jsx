import React from 'react';



export default function Input(props) {
     return (
         <input type={props.type} style={props.style}  name={props.name} onChange={props.onChange}  className="weather-inputs" placeholder={props.ph}/>
     );
}