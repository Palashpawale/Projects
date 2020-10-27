import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <a className="navMenu">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about-us"> AboutUs </NavLink></li>
            <li><NavLink to="/post"> Posts </NavLink></li>
            <li><NavLink to="/contact-us"> ContactUs </NavLink></li>
            <li><NavLink to="/help-us"> Help ? </NavLink></li>
            </a>
            
        </div>
    );
};


export default Navbar;