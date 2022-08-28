import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({picture, pictureAlt, title}) => {
    return (
        
            <div className='card__content'>

            </div>
        
    );
}

Card.propTypes = {
    picture: PropTypes.string,
    pictureAlt: PropTypes.string,
    title: PropTypes.string
}

export default Card;
