import React from "react";
import { NavLink } from "react-router-dom";
import '../style/navBar.css'


const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar">
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/explore' activeClassName="active">Explore</NavLink>
                        </li>
                        <li>
                            <NavLink to='/community' activeClassName="active">My Community</NavLink>
                        </li>
                        <li>
                            <NavLink to='/events' activeClassName="active">Events</NavLink>
                        </li>
                        <li>
                            <NavLink to='/settings' activeClassName="active">Settings</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavBar;