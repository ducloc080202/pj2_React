import React from 'react';
import Button_comp from './comp/Button_comp';

function Phone_navbar() {
    return ( 
        <div className='phone_navbar'>
                <Button_comp
                    link='/status'
                    icon='notifications-outline'
                />
                  <Button_comp
                    link='/setting'
                    icon='settings-outline'
                />
                  <Button_comp
                    link='/report'
                    icon='bar-chart-outline'
                />
        </div>
     );
}

export default Phone_navbar;