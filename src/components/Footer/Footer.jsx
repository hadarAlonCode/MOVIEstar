import React from 'react';
import PropTypes from 'prop-types';
import hadar from "../../images/hadar.png"

const Footer = props => {
    return (
        <footer className="footer__container">
            <img className='hadar__logo' src={hadar} alt="logo" />
        </footer>
    );
};



export default Footer;