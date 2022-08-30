import React from 'react';
import './About.css';
import Banner from '../../UI/banner/Banner';
import AboutData from '../../data/AboutData.js'
import Dropdown from '../../UI/dropdown/Dropdown';

const About = () => {
    

console.log(AboutData);

    return (
        <main>
            <Banner />
            {AboutData.map((item, index) => (
        <Dropdown key={item[0] + index} title={item[0]} description={item[1]} />
      ))}
        </main>
    );
}

export default About;
