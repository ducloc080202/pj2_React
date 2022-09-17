import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Context from '../components/data/Context'

function Status() {
    const state=useContext(Context)

    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Trạng thái hoạt động'
            />
            <div className='content'>
            <div className= {state[0].state?'content_status stateOn':'content_status stateOff'}>
                {
                    state[0].state?'Hệ thống đang hoạt động':'Hệ thống dừng hoạt động'
                }
            </div>
            </div>
         </div>
    </div>
     );
}

export default Status;