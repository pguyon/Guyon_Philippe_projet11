import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../assets/logo-kasa.png'



const Header = () => {
    return (
        <div>
           <img src={logo} alt='' style={{width: '210px', height: '68px'}}></img>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </div>
    );
}

export default Header;
