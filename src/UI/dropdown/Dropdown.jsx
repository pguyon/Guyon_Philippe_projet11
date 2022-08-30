import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css'

const Dropdown = ({title, description }) => {
    const [show, setShow] = useState(false);

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className='dropdown__title'>
                <h2>{title}</h2>
             <button onClick={toggle}>+</button>
            </div>
            {show ? <div className='dropdown__description'><p>{description}</p></div> : ''}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Dropdown;
