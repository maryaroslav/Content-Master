import React from "react";
import '../style/headerWelcome.css';
import logo from '../img/logo.svg';

const HeaderWelcome = () => {
    return (
        <header className='header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
                <p>Content Master</p>
            </div>
            <nav className='nav'>
                <a href="/login" className='link'>Sign In</a>
                <a href="/register" className='link special'>Sign Up</a>
            </nav>
        </header>
    );
}

export default HeaderWelcome;