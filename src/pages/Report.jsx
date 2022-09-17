import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
function Report() {
    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Báo cáo'
            />
            <div className='content'>
                <div >
                    
                </div>
            </div>
         </div>
    </div>
     );
}

export default Report;