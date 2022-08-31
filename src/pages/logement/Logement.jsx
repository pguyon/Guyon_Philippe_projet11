import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './Logement.css'
import Carousel from '../../UI/carousel/Carousel';

const Logement = () => {
    const [logement, setLogement] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        fetch("../logements.json")
          .then((res) => {
            return res.json()
          } )
          .then((data) => {
            setLogement(data);
          })
          .catch((err) => console.log(err));
      }, [id])
        
         const house = logement.filter((item) => item.id === id);
         console.log(house);

    return (
        <div>
            {house.map((item) => (
                <div key={item.id}>
                    <Carousel pictures={item.pictures}/>
                    <h1>{item.title}</h1>
                    <p>{item.location}</p>
                </div>
               
            ))}
        </div>
    );
}

export default Logement;
