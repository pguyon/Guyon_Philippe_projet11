import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-kasa.png'
import './Header.css'


const Header = () => {
    return (
        <div className='header-wrapper'>
            <img className='header__img' src={logo}
                alt=''></img>
            <li>
                <Link className='header__link' to="/">Accueil</Link>
                <Link className="header__link" to="/about">A propos</Link>
            </li>
        </div>
    );
}

export default Header;
