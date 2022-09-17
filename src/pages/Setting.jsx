import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Context from '../components/data/Context'
function Setting() {
    const state=useContext(Context)
    return ( 
        <div className="mainContainer">
        <Navbar/>
        <div className="main">
            <Header
                status='Thống số hoạt động'
            />
            <div className='content'>
                <div className='content_data'>
                    <h2>Thống số hoạt động</h2>
                    <p>Thời gian hoạt động: {state[0].time}</p>
                    <div className="progressbar">
                        <div className="fill"
                        style={{
                            width:`${state[0].time/2}%`,
                        }}
                        >{state[0].time}/200</div>
                    </div>
                    <p>Số lần đã nhấn: {state[0].pushCount}</p>
                    <div className="progressbar">
                        <div className="fill"
                        style={{
                            width:`${state[0].pushCount/2}%`,
                        }}
                        >{state[0].pushCount}/200</div>
                    </div>
                    <p>Lực nén hiện tại: {state[0].pressure}</p>
                </div>
            </div>
         </div>
    </div>
     );
}

export default Setting;