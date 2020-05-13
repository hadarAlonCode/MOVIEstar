import React from 'react';
import PropTypes from 'prop-types';
import hadar from "../../images/hadar.png"
import Fade from 'react-reveal/Fade';

const Footer = props => {
    return (
        <footer className="footer__container">
            <Fade bottom>
                 <img className='hadar__logo' src={hadar} alt="logo" />
            </Fade>
        </footer>
    );
};



export default Footer;