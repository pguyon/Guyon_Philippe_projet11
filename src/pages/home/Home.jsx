import React, {useState, useEffect} from 'react';

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
            <h1>Home</h1>
        </div>
    );
}

export default Home;
