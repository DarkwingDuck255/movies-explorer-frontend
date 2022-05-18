import './NotFound.css';
import React from 'react';
import { Link } from 'react-router-dom';


export default function NotFound() {

    return (
        <>
            <section className='not-found'>
                <h2 className='not-found__title'>404</h2>
                <p className='not-found__description'>Страница не найдена</p>
                <Link to='/' className='not-found__link common__link'>Назад</Link>
            
            </section>
        </>
    )
}