import React from 'react';
import StarsIcones from './StarsIcones';
import PropTypes from 'prop-types';
import './Stars.css'

const Stars = ({rating}) => {
    const starsContainer = [<StarsIcones />, <StarsIcones />, <StarsIcones />, <StarsIcones />, <StarsIcones />];
    const numberRating = rating;


    return (
        <div className="stars__wrapper">
            {starsContainer.map((item, index) => {
        if (index < numberRating) {
          return (
            <div key={index + rating}  className="stars__rating">
              {item}
            </div>
          );
        } else {
          return <div className="stars__norating" key={index + rating}>{item}</div>;
        }
      })}
        </div>
    );
}

Stars.propTypes = {
    rating: PropTypes.string
}

export default Stars;
