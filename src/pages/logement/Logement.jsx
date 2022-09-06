import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import './Logement.css'
import Carousel from '../../UI/carousel/Carousel';
import Collapse from '../../UI/collapse/Collapse';
import Error from '../error/Error';
import Loader from '../../UI/loader/Loader';
import Profile from '../../UI/profile/Profile';

const Logement = () => {
    const [logement, setLogement] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        fetch("../logements.json")
          .then((res) => {
            return res.json()
          } )
          .then((data) => {
            setLogement(data);
            setIsLoading(true)
          })
          .catch((err) => console.log(err));
      }, [id])
        
         const house = logement.filter((item) => item.id === id);
         

        if(!isLoading){
            return <Loader />
        }
        else if(house.length === 0){
            return <Error/>
        }else {
            return (
                <div>
                    {house.map((item) => (
                        <div key={item.id}>
                            <Carousel pictures={item.pictures}/>
                            <Profile houseData={house} />
                            <Collapse house__desc={item.description} house__equi={item.equipments}/>
                        </div>
                    ))}
                </div>
            );
         }
 
}

export default Logement;
