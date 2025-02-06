import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { getCurrentUser } from '../utils/getCurrentUser';

import HeaderWelcome from "../components/HeaderWelcome";
import '../style/welcome.css';

import bag from '../img/bag.svg';
import ball from '../img/ball.svg';
import bank from '../img/bank.svg';
import heart from '../img/heart.svg';
import green from '../img/green.svg';
import fire from '../img/fire.svg';
import gamepad from '../img/gamepad.svg';
import guitar from '../img/guitar.svg';
import hat from '../img/hat.svg';
import light from '../img/light.svg';
import like from '../img/like.svg';
import tent from '../img/tent.svg';
import smile from '../img/smile.svg'
import hand from '../img/hand.svg'
import ship from '../img/ship.svg'

const Welcome = () => {
    const navigate = useNavigate();
    const currentUser = getCurrentUser();

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "";
        };
    }, []);

    const handleClick = () => {
        if (currentUser) {
            navigate('/explore')
        } else {
            navigate('/login')
        }
    }

    return (
        <div className="welcome">
            <HeaderWelcome />
            <div className="info-container">
                <div className="info">
                    <div className="info-title">
                        <h1>Join the Chatvolution</h1>
                    </div>
                    <div className="info-text">
                        <p>Ask questions, share ideas, and build connections with each other.</p>
                    </div>
                    <div className="info-button">
                        <a onClick={handleClick}>Join Content Master Community<img src={ship} alt="" /></a>
                    </div>
                </div>
            </div>
            <div className="circles-container">
                <div className="circle-1 circle">
                    <div className="emoji-greyBackground greyBackground">
                        <img src={hat} alt="hat" />
                    </div>
                    <div className="emoji-greyBackground greyBackground">
                        <img src={fire} alt="" />
                    </div>
                    <div className="circle-2 circle">
                        <div className="emoji-container">
                            <img src={heart} alt="" />
                        </div>
                        <div className="emoji-greyBackground greyBackground">
                            <img src={bank} alt="" />
                        </div>
                        <div className="emoji-greyBackground greyBackground">
                            <img src={guitar} alt="" />
                        </div>
                        <div className="emoji-container">
                            <img src={green} alt="" />
                        </div>
                        <div className="emoji-container">
                            <img src={green} alt="" />
                        </div>
                        <div className="emoji-greyBackground greyBackground">
                            <img src={ball} alt="" />
                        </div>
                        <div className="circle-3 circle">
                            <div className="emoji-greyBackground greyBackground">
                                <img src={bag} alt="" />
                            </div>
                            <div className="emoji-greyBackground greyBackground">
                                <img src={tent} alt="" />
                            </div>
                            <div className="emoji-greyBackground greyBackground">
                                <img src={gamepad} alt="" />
                            </div>
                            <div className="emoji-greyBackground greyBackground">
                                <img src={light} alt="" />
                            </div>
                            <div className="emoji-container">
                                <img src={heart} alt="" />
                            </div>
                            <div className="circle-4 circle">
                                <div className="emoji-greyBackground greyBackground">
                                    <img src={like} alt="" />
                                </div>
                                <div className="emoji-greyBackground greyBackground">
                                    <img src={smile} alt="" />
                                </div>
                                <div className="emoji-greyBackground greyBackground">
                                    <img src={hand} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;