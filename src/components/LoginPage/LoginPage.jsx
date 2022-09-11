import React from 'react';
import { Link } from "react-router-dom";
// import 'LoginPage.module.scss'
// import './LoginPage.module.scss'
import './xl.module.css'
function LoginPage() {
    return ( 
        <>
            <div className="container">
                <div className="overlay_container">
                    <h1>overlay_container</h1>
                </div>
                <div className="form_container">
                    <h1>form_container</h1>
                </div>
            </div>
            <Link to='/main'>main</Link>
        </>
     );
}

export default LoginPage;