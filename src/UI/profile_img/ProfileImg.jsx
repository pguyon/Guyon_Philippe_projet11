import React from 'react';
import './ProfileImg.css';
import PropTypes from 'prop-types'

const ProfileImg = ({host}) => {
    console.log(host);
    return (
        <section className='profile__img__wrapper'>
            <div className='profile__name'>
                <h2>{host.name}</h2>
            </div>
            <img  src={host.picture} alt={host.name}/>
        </section>
    );
}

ProfileImg.propTypes = {
    host: PropTypes.object
}
export default ProfileImg;
