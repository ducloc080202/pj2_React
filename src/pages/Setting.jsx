import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
function Setting() {
    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Cài đặt và thống số hoạt động'
            />
            <div className='content'>
            </div>
         </div>
    </div>
     );
}

export default Setting;