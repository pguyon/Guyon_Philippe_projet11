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
             <button onClick={toggle}>{title}</button>
            {show ? <p>{description}</p> : ''}
        </div>
    );
}

Dropdown.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}

export default Dropdown;
