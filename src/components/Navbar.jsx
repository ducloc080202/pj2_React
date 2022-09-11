import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <div className="navbar">
            <div className="username">
                <ion-icon name="person-circle-outline"></ion-icon>
                <h1>username</h1>
                <div className="navbar__block" >
                    <ion-icon name="home-outline"></ion-icon>
                    <Link to='/'>Đăng xuất</Link>
                </div>
            </div>
            <div className="navigation">
                <div className="navbar__block" >
                    <ion-icon name="notifications-outline"></ion-icon>
                    Trạng thái hoạt động
                </div>
                <div className="navbar__block" >
                    <ion-icon name="settings-outline"></ion-icon>
                    Cài đặt và thông số
                </div>
                <div className="navbar__block" >
                    <ion-icon name="bar-chart-outline"></ion-icon>
                    Báo cáo
                </div>
            </div>
        </div>
     );
}

export default Navbar;