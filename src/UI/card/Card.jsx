import React from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ({picture, pictureAlt, title}) => {
    return (
        
            <article className='card__content'>
                <img className='card__img' src={picture} alt={pictureAlt}/>                
                     <h2 className='card__title'>{title}</h2>
            </article>
        
    );
}

Card.propTypes = {
    picture: PropTypes.string,
    pictureAlt: PropTypes.string,
    title: PropTypes.string
}

export default Card;
