import { useState } from 'react';
import { LOGO_URL } from '../utils/constants'

const Header = () => {

    const [status, setStatus] = useState('Login')

    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                    <button className='login-btn' onClick={() => {
                        setStatus(status === "Login" ? "Logout" : "Login");
                    }}>{status}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
