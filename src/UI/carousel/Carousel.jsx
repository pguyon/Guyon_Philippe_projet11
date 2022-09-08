import React, {useState} from 'react';
import './Carousel.css'
import PropTypes from 'prop-types';
import ArrowLeft from '../arrow/ArrowLeft';
import ArrowRight from '../arrow/ArrowRight';


const Carousel = ({pictures}) => {
    const [currentImg , setCurrentImg] = useState(1)


  /* If there are no pictures, then return an empty string. */
    if (pictures.length === 0) {
        return "";
      }
    
   /* If there is only one picture, it will return the picture. */
    if (pictures.length === 1) {
        return (
          <div className='carousel__content'>
            <img src={pictures[0]} alt='' />
          </div>
        );
    }

   /**
    * If the current image is 1, then return the current image as the length of the pictures array.
    * Otherwise, set the current image to the previous image.
    * @returns the value of the currentImg.
    */
    const handleClickLeft = () => {
        if (currentImg === 1) return setCurrentImg(pictures.length);
        setCurrentImg((prevCount) => prevCount - 1);
      };


  /**
   * If the current image is the last image, then return the first image. Otherwise, return the next
   * image.
   * @returns The currentImg is being returned.
   */
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
