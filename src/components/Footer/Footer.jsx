import React from 'react';
import PropTypes from 'prop-types';
import hadar from "../../images/hadar.png"
import db from "../../images/db.svg"

import Fade from 'react-reveal/Fade';

const Footer = props => {
    return (
        <footer className="footer__container">
            <Fade bottom>
                 <img className='hadar__logo' src={hadar} alt="logo" />
            </Fade>
            <img className='db__logo' src={db} alt="db_logo" />
        </footer>
    );
};



export default Footer;