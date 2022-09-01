import React, {useState} from 'react';
import './Carousel.css'
import PropTypes from 'prop-types';
import ArrowLeft from '../arrow/ArrowLeft';
import ArrowRight from '../arrow/ArrowRight';


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


    
    return (
        <div className='carousel__wrapper'>
                <div className='carousel__content'>
                    <button onClick={handleClickLeft} className='arrow__left'><ArrowLeft/></button>
                    <img className='carousel__img' src={pictures[currentImg - 1]} alt=''/>
                    <div className='carousel__counter'>
                        {currentImg}/{pictures.length}
                    </div>
                    <button onClick={handleClickRight} className='arrow__right'><ArrowRight/></button>
                </div>
                
        </div>
    );
}

Carousel.propTypes = {
    pictures: PropTypes.array
}

export default Carousel;
