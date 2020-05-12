import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from "../../images/logo.png"

const NavBar = props => {
    return (
        <nav>
            <ul className="nav__bar grid">
                 <Link to= {`/`}><li ><img className='top__rated__icon'  src={logo} alt="logo" width="100px"  /></li></Link> 
                <li>FAVORITES</li>      
            </ul>
        </nav>
    );
};

export default NavBar;