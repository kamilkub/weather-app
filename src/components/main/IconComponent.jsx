import React from 'react';


export default function IconComponent (props) {
     

    return (
        <div className="icon-delay">
            <img src={"./images/icons/" + props.src } alt="weather-icon" />
            <h4>{props.data}</h4>
        </div>
    )

}