import { useState, useEffect } from 'react';
import { LOGO_URL } from '../utils/constants'
import { Link } from 'react-router-dom';

const Header = () => {

    const [status, setStatus] = useState('Login')
    //if no dependency array => useEffect is called on every render.
    //if dependency array is empty = [] => useEffect is called only once , on initial render.
    // if dependency array is [staus] = > called everytime status is updated.

    useEffect(() => {
        console.log("effect called")
    }, [status]);

    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt="logo" />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/about" >About Us</Link></li>
                    <li><Link to="/contact" >Contact us</Link></li>
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
