import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './Logement.css'

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

    return (
        <div>
            {house.map((item) => (
                <h1 key={item.id}>{item.title}</h1>
            ))}
        </div>
    );
}

export default Logement;
