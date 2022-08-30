import React, {useState} from 'react';
import './About.css'
import Banner from '../../UI/banner/Banner';

const About = () => {
    const [show, setShow] = useState(false);


const toggle = () => {
    setShow(!show)
}


    return (
        <div>
            <Banner />
            {show ? <h1>About</h1> : ''}
            <button onClick={toggle}>Click</button>
        </div>
    );
}

export default About;
