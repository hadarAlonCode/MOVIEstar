import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const NavBar = props => {
    return (
        <nav>
            <ul className="nav__bar grid">
                 <Link to= {`/`}><li >LOGO</li></Link> 
                <li>FAVORITES</li>      
            </ul>
        </nav>
    );
};

export default NavBar;