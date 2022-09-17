import React, { useContext, useEffect } from 'react';
import Button_comp from './comp/Button_comp';
import Phone_navbar from './Phone_navbar';
import Context from './data/Context';
import { Link } from "react-router-dom";
function Navbar() {
    const state=useContext(Context)
    console.log(state[0]);
    useEffect(()=>{
        const intervalCall = setInterval(() => {
            fetch('https://retoolapi.dev/9wNHKw/pj2')
            .then(p=>p.json())
            .then(p=>state[1]({type:'change',payload:p[Math.floor(Math.random()*100)]}))
          }, 5000);
          return () => {
            clearInterval(intervalCall);
          };
    },[])
    return ( 
        <>
            <div className="navbar">
                <div className="username">
                    <ion-icon name="person-circle-outline"></ion-icon>
                    <h1>username</h1>
                    <Button_comp
                        link='/'
                        icon='home-outline'
                        content='Đăng xuất'
                    />
                </div>
                <div className="navigation">
                    <div className="navbar__block"  >
                        <Link to='/status'> 
                            <button className={state[0].state?'stateOn':'stateOff'} type="button"><ion-icon name='notifications-outline'></ion-icon>Trạng thái hoạt động</button>
                        </Link>
                    </div>
                    <Button_comp
                        link='/setting'
                        icon='settings-outline'
                        content='Cài đặt và thông số'
                    />
                    <Button_comp
                        link='/report'
                        icon='bar-chart-outline'
                        content='Báo cáo'
                    />
                </div>
            </div>
            <Phone_navbar/>     
        </>
     );
}

export default Navbar;