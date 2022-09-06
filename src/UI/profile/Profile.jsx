import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types'

const Profile = ({houseData}) => {
    console.log(houseData);
    return (
        <section className='profile__wrapper'>
            {houseData.map((item) => (
                <div key={item.id} className='profile__content'>
                  <h1  className='profile__title'>{item.title}</h1>
                  <p className='profile__location'>{item.location}</p>
                </div>
            ))}
          
        </section>
    );
}

Profile.propTypes = {
    houseData: PropTypes.array
}

export default Profile;
