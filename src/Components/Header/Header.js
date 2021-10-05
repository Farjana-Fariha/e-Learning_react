import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuStyle from './Header.css'
import image from '../../img/logo.svg'

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <div className='container'>
            <div className='row align-items-center'>
                <div className='col-xl-4'>
                    <div className='logo'>
                        <img src={image}></img>
                    </div>
                </div>
                <div className='col-xl-8'>
                    <div className='menu'>
                        <ul>
                            <li>
                                <NavLink
                                    to="/home"
                                    activeStyle={activeStyle}>
                                    <a>Home</a>
                                </NavLink>

                            </li>
                            <li><NavLink
                                to="/services"
                                activeStyle={activeStyle}>
                                <a>Services</a>
                            </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    activeStyle={activeStyle}>
                                    <a>About us</a>
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="/Contact"
                                    activeStyle={activeStyle}>
                                    <a>Contact</a>
                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;