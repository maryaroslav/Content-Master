import React from "react";
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/getCurrentUser';

import '../style/headerMain.css';
import logo from '../img/logo.svg';
import search from '../img/search.svg';
import message from '../img/message.svg';
import kolokolchik from '../img/kolokolchik.svg';
import user from '../img/user.svg';
import arrowDown from '../img/arrow-down.svg';

const HeaderMain = () => {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();

    if (!currentUser) {
        navigate('/register')
    }

    const handleToMain = (event) => {
        event.preventDefault();
        navigate('/')
    }

    return (
        <header className='header-main'>
            <div className='logo' onClick={handleToMain}>
                <img src={logo} alt="logo" />
                <p>Content Master</p>
            </div>
            <div className="search-container">
                <div className="search">
                    <img src={search} alt="" />
                    <input type="text" placeholder="Search"/>
                </div>
            </div>
            <nav className='nav'>
                <a href="/" className='link'><img src={message} alt="" /></a>
                <a href="/" className='link'><img src={kolokolchik} alt="" /></a>
                <div className="user-container">
                    <div className="user">
                        <div className="user-img">
                            <img src={user} alt="" />
                        </div>
                        <div className="user-name">
                            <p>{currentUser.name}</p>
                        </div>
                        <div className="user-modal">
                            <img src={arrowDown} alt="" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default HeaderMain;