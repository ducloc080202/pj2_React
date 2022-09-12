import React from 'react';
import Clock from './comp/Clock';
import Button_comp from './comp/Button_comp';
function Header(props) {
    return ( 
        <div className='header'>
            <h1 id='modeStatus'>{props.status}</h1>
            <Button_comp
                        link='/'
                        icon='home-outline'
            />
            <Clock/>
        </div>
     );
}

export default Header;