import './Footer.css'
import React from 'react'

function Footer() {

    return (
        <footer className='footer'>
            <p className='footer__author'>Учебный проект Яндекс.Практикум х BeatFilm by Arsen.</p>
            <div className='footer__contacts-wrap'>
                <div className='footer__date'>© {new Date().getFullYear()}</div>
                <div className='footer__contacts'>
                    <a href='https://practicum.yandex.ru/' className='footer__contact common__link'>Яндекс.Практикум</a>
                    <a href='https://github.com/DarkwingDuck255' className='footer__contact common__link'>Github</a>
                    <a href='https://t.me/Arsen255' className='footer__contact common__link'>Telegram</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer