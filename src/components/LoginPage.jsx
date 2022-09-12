import React from 'react';
import { Link } from "react-router-dom";
import Button_comp from './comp/Button_comp';
function LoginPage() {
    return ( 
        <>
            <div className='body'>
                <div className="login_container">
                    <div className="overlay_container">
                    </div>
                    <div className="form_container">
                    <form >
                        <h1>Welcome back</h1>
                        <input name="email" type="email" placeholder="Tên đăng nhập, Email & Số điện thoại" />
                        <input name="password" type="password" placeholder="Mật khẩu" />
                        <Link to='/main'>Quên mật khẩu?</Link>
                      
                        <Button_comp
                            link='/main'
                            content='Đăng nhập'
                        />
                    </form>
                    </div>
                </div>
            </div>
            
        </>
     );
}

export default LoginPage;