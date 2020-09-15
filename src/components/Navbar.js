import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper grey darken-3">
                <div className="container">
                    <Link to='/' className="brand-logo">Tyler Leung</Link>
                    <Link to='/' data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul className="right hide-on-med-and-down" id="mobile-menu">
                        <li><Link to="/" className="waves-effect waves-light">Home</Link></li>
                        <li><Link to="#about" className="waves-effect waves-light">About</Link></li>
                        <li><Link to="#resume" className="waves-effect waves-light">Resume</Link></li>
                        <li><Link to="/projects" className="waves-effect waves-light">Projects</Link></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="slide-out">
                <li><Link to="/" className="waves-effect waves-light">Home</Link></li>
                <li><Link to="#about" className="waves-effect waves-light">About</Link></li>
                <li><Link to="#resume" className="waves-effect waves-light">Resume</Link></li>
                <li><Link to="/projects" className="waves-effect waves-light">Projects</Link></li>
            </ul>
        </div>      
        
        
    )
}

export default Navbar