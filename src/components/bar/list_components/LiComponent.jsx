import React from 'react';
import { Link } from 'react-router-dom';

export default function LiComponent(props) {
  return ( <li className="li-component">
               <Link to={props.redirect} className="side-href">{props.text}</Link>
           </li>
  );
}