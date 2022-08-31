import React, {useState} from 'react';
import './Carousel.css'
import PropTypes from 'prop-types';

const Carousel = ({pictures}) => {
    const [currentImg , setCurrentImg] = useState(1)


    if (pictures.length === 0) {
        return "";
      }
    
    if (pictures.length === 1) {
        return (
          <div className='carousel__content'>
            <img src={pictures[0]} alt='' />
          </div>
        );
    }

    const handleClickLeft = () => {
        if (currentImg === 1) return setCurrentImg(pictures.length);
        setCurrentImg((prevCount) => prevCount - 1);
      };


      const handleClickRight = () => {
        if (currentImg === pictures.length) return setCurrentImg(1);
        setCurrentImg((prevCount) => prevCount + 1);
      };


    console.log(pictures);
    return (
        <div className='carousel__wrapper'>
                <div className='carousel__content'>
                    <button onClick={handleClickLeft}>+</button>
                    <img className='carousel__img' src={pictures[currentImg - 1]} alt=''/>
                    <div>
                        {currentImg}/{pictures.length}
                    </div>
                    <button onClick={handleClickRight}>-</button>
                </div>
        </div>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.array
}

export default Carousel;
