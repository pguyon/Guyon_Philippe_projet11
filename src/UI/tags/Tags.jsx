import React from 'react';
import './Tags.css';
import PropTypes from 'prop-types';

const Tags = ({tags}) => {
    return (
        <section className='tags__wrapper'>
           {tags.map((item,index) => (
            <li className='tags__li' key={index}>{item}</li>
           ))}
        </section>
    );
}

Tags.propTypes = {
    tags: PropTypes.array
}

export default Tags;
