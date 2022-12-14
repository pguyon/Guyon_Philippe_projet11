import React from 'react';
import './About.css';
import Banner from '../../UI/banner/Banner';
import AboutData from '../../data/AboutData.js'
import Collapse from '../../UI/collapse/Collapse';

const About = () => {

    return (
        <main className='about__wrapper'>
            <Banner />
            {AboutData.map((item, index) => (
        <Collapse key={item[0] + index} title={item[0]} description={item[1]} />
      ))}
        </main>
    );
}

export default About;
