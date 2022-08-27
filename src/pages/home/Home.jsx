import React, {useState, useEffect} from 'react';
import Banner from '../../UI/banner/Banner';

const Home = () => {
    const [logement, setLogement] = useState([]);
    
    useEffect(()=> {
        fetch('logements.json',
        {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        .then((res) => {
            return res = res.json()
        })
        .then((data) => {
            setLogement(data)
        })

    }, [])
    
    console.log(logement);
    return (
       <Banner/>
    );
}

export default Home;
