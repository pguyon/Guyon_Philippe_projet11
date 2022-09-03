import React from 'react';
import './Error.css'
import { Link } from 'react-router-dom'

const Error = () => {
    return (
        <main className='error__wrapper'>
            <h1 className='error__title'>404</h1>
            <p className='error__para'>Oups! La page que vous demandez n'éxiste pas</p>
            <Link className='error__link' to="/">Retourner à la page d'accueil</Link>
        </main>
    );
}

export default Error;
