import React, {useState, useEffect} from 'react';
import Banner from '../../UI/banner/Banner';
import Card from '../../UI/card/Card';
import {Link} from 'react-router-dom';
import './Home.css'

const Home = () => {
    const [logement, setLogement] = useState([]);

    useEffect(() => {
        fetch('logements.json', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((res) => {
            return res = res.json()
        }).then((data) => {
            setLogement(data)
        })

    }, [])

    console.log(logement);
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

export default Home;
