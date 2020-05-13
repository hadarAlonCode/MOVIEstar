import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from "../../images/logo.png"
import { ScrollToTopMovieCatalog } from '../../functions/scroll';

const NavBar = props => {

    return (
        <nav>
            <ul className="nav__bar grid">
                 <Link onClick={()=>ScrollToTopMovieCatalog()} to= {`/`}><li ><img className='top__rated__icon'  src={logo} alt="logo" width="100px"  /></li></Link> 
                 <Link to= {`/favorites`}><li className="btn nav__btn">My List</li> </Link> 
            </ul>
        </nav>
    );
};

export default NavBar;