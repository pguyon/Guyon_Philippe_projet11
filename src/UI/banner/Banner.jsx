import React from 'react';
import './Banner.css'
import Home from '../../assets/home-img.jpg'
import { useLocation } from 'react-router-dom'

const Banner = () => {
    const location = useLocation()
    return (
        <div className='banner__wrapper'>
            {location.pathname === '/' ? <img className='banner__img' src={Home} alt=''/> : 'youpi'}
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;
