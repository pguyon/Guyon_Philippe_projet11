import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.css';
import ArrowDown from '../arrow/ArrowDown';
import ArrowUp from '../arrow/ArrowUp';

const Dropdown = ({title, description }) => {
    const [show, setShow] = useState(false);
    

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className='dropdown__title'>
                <h2>{title}</h2>
             <button onClick={toggle} >{show ?  <ArrowUp/>: <ArrowDown/>}</button>
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
