import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Collapse.css';
import ArrowDown from '../arrow/ArrowDown';
import ArrowUp from '../arrow/ArrowUp';

const Collapse = ({title, description }) => {
    const [show, setShow] = useState(false);
    

    const toggle = () => {
        setShow(!show)
    }

    return (
        <div>
            <div className='collapse__title'>
                <h2>{title}</h2>
             <button onClick={toggle} >{show ?  <ArrowUp/>: <ArrowDown/>}</button>
            </div>
            {show ? <div className='collapse__description'><p>{description}</p></div> : ''}
        </div>
    );
}

Collapse.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Collapse;
