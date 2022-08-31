import React from 'react';
import './Footer.css';
import Logo from '../../assets/logo-kasa-white.png';

const Footer = () => {
    return (
        <footer className='footer__wrapper'>
            <div className='footer__content'>
                <img  className='footer__img' src={Logo} alt=''/>
                <p>@ Kasa. All rights reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
