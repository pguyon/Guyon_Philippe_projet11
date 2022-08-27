import React, {useState, useEffect} from 'react';
import Banner from '../../UI/banner/Banner';
import Card from '../../UI/card/Card';

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
        <div>
            <Banner/>
            <Card />
        </div>
    );
}

export default Home;
