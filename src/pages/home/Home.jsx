import React, {useState, useEffect} from 'react';
import Banner from '../../UI/banner/Banner';
import Card from '../../UI/card/Card';
import {Link} from 'react-router-dom';
import Loader from '../../UI/loader/Loader';
import './Home.css'

const Home = () => {
    const [logement, setLogement] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        fetch('logements.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res = res.json()
        }).then((data) => {
            setLogement(data);
            setIsLoading(true)
        })

    }, [])
    
    if(!isLoading){
        return <Loader />
    } else {
        return (
            <main>
                <Banner/>
                <section className='section__wrapper'> {
                    logement.map((item) => (
                        <Link className='section__link' key={
                                item.id
                            }
                            to={
                                `/logement/${
                                    item.id
                                }`
                        }>
                            <Card picture={
                                    item.cover
                                }
                                pictureAlt={
                                    item.title
                                }
                                title={
                                    item.title
                                }/>
                        </Link>
                    ))
                } 
                </section>
            </main>
        );
    }

   
}

export default Home;
