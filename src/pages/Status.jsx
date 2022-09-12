import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
function Status() {
    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Trạng thái hoạt động'
            />
            <div className='content'>
            </div>
         </div>
    </div>
     );
}

export default Status;