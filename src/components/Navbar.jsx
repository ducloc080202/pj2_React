import React, { useContext } from 'react';
import Button_comp from './comp/Button_comp';
import Phone_navbar from './Phone_navbar';
import Context from './data/Context';
function Navbar() {
    const state=useContext(Context)
    console.log(state);
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
                    <Button_comp
                        link='/status'
                        icon='notifications-outline'
                        content='Trạng thái hoạt động'
                    />
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