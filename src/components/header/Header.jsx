import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import logo from '../../assets/logo-kasa.png'
import './Header.css'


const Header = () => {

    const activeLink = useLocation();

    return (
        <div className='header-wrapper'>
            <img className='header__img' src={logo}
                alt=''></img>
            <nav>
                <Link className='header__link' to="/">
                <li className={activeLink.pathname === '/' ? "header__link__active active" : "header__link"}>Accueil</li>
                </Link>
                <Link className="header__link" to="/about">
                <li className={activeLink.pathname === '/about' ? "header__link__active active" : "header__link"}>A propos</li>
                </Link>
            </nav>
        </div>
    );
}

export default Header;
