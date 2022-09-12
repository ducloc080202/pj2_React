import React from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';

function MainPage() {
    return ( 
        <div className="mainContainer">
            <Navbar/>
            <div className="main">
                <Header/>
                <div className='content'>
                </div>
             </div>
        </div>
    );
}

export default MainPage;