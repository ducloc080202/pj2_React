import React from 'react';
import { Link } from "react-router-dom";

function Button_comp(props) {
    return ( 
        <div className="navbar__block" >
            <Link to={props.link}> 
                <button type="button"><ion-icon name={props.icon}></ion-icon>{props.content}</button>
            </Link>
        </div>
     );
}

export default Button_comp;