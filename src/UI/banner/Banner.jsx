import React from 'react';
import './Banner.css'
import Home from '../../assets/home-img.jpg'

const Banner = () => {
    return (
        <div className='banner__wrapper'>
            <img className='banner__img' src={Home} alt=''/>
            <h1 className='banner__title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
}

export default Banner;