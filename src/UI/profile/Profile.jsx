import React from 'react';
import './Profile.css';
import PropTypes from 'prop-types'
import Tags from '../tags/Tags';
import ProfileImg from '../profile_img/ProfileImg';
import Stars from '../stars/Stars'


const Profile = ({houseData}) => {
    console.log(houseData);
    return (
        <section className='profile__wrapper'>
            {houseData.map((item) => (
                <div key={item.id} className='profile__content'>
                    <div>
                        <h1  className='profile__title'>{item.title}</h1>
                        <p className='profile__location'>{item.location}</p>
                        <Tags tags={item.tags}/>
                    </div>
                    <div className='profile__description'>
                        <ProfileImg  host={item.host}/>
                        <Stars rating={item.rating}/>
                    </div>
                </div>
            ))}
          
        </section>
    );
}

Profile.propTypes = {
    houseData: PropTypes.array
}

export default Profile;
