import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className = "nav-wrapper red darken-3">
            <div className="container">
                <a className = "brand-logo"><Link to='/'>Tyler Leung</Link></a>
                <ul className="right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar