import './AboutMe.css'
import React from 'react';
import { Link } from 'react-router-dom';
import arrow from '../../images/arrow.svg'
import myPic from '../../images/myPic2.gif'

function AboutMe() {

    return (
        <section className='about-me'>
            <h2 className='about-me__header techs__header'>Студент</h2>
            <div className='about-me__wrapper'>
                <div className='about-me__full-info'>
                    <h3 className='about-me__name'>Арсен</h3>
                    <h4 className='about-me__subtitle'>
                        Фронтенд-разработчик, 31 год
                    </h4>
                    <p className='about-me__info'>
                        Тут какой-то текст обо мне, но сейчас мне его лень писать, извините, напишу его позже.
                        Тут какой-то текст обо мне, но сейчас мне его лень писать, извините, напишу его позже.
                        Тут какой-то текст обо мне, но сейчас мне его лень писать, извините, напишу его позже.
                    </p>
                    <ul className='about-me__contacts'>
                        <li className='about-me__contact-item'>
                            <a href='https://github.com/DarkwingDuck255' className='about-me__contact-link common__link'>Github</a>
                        </li>
                        <li className='about-me__contact-item'>
                            <a href='https://github.com/DarkwingDuck255' className='about-me__contact-link common__link'>Github</a>
                        </li>
                    </ul>
                </div>
                <img src={ myPic } className='about-me__photo' alt='возможно, мое фото'/>
            </div>
            <div className='about-me__portfolio'>
                <h5 className='about-me__portfolio-title'>
                    Портфолио
                </h5>
                <div className='about-me__portfolio-link-wrap'>
                    <a href='https://github.com/DarkwingDuck255/how-to-learn' className='about-me__portfolio-link common__link'>Статичный сайт </a>
                    <img src={arrow} className='about-me__portfolio-arrow' alt='стрелочка'/>
                </div>
                <div className='about-me__portfolio-link-wrap'>
                    <Link to='https://github.com/DarkwingDuck255/russian-travel' className='about-me__portfolio-link common__link'>Адаптивный сайт </Link>
                    <img src={arrow} className='about-me__portfolio-arrow' alt='стрелочка'/>
                </div>
                <div className='about-me__portfolio-link-wrap'>
                    <Link to='https://github.com/DarkwingDuck255/mesto-react' className='about-me__portfolio-link common__link'>Одностраничное приложение</Link>
                    <img src={arrow} className='about-me__portfolio-arrow' alt='стрелочка'/>
                </div>
            </div>

        </section>
    )
}

export default AboutMe