import { useState } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
import useGetOnlineStatus from '../utils/useGetOnlineStatus';

const Header = () => {

    const [status, setStatus] = useState('Login')

    const onlineStatus = useGetOnlineStatus();

    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Online Status:{onlineStatus ? "ON" : "OFF"}</li>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/contact" >Contact us</Link></li>
                    <li><Link to="/grocery" >Grocery</Link></li>
                    <li><Link to="/" >Cart</Link></li>

                    <button className='login-btn' onClick={() => {
                        setStatus(status === "Login" ? "Logout" : "Login");
                    }}>{status}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;
