import './Techs.css'
import React from 'react';

function Techs() {

    return (

        <section className='techs'>
            <div className='techs__wrapper'>
                <h2 className='techs__header'>
                    Технологии
                </h2>
                <h3 className='techs__title'>
                    7 технологий
                </h3>
                <p className='techs__description'>
                    На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
                </p>
                <div className='techs__list'>
                    <div className='techs__list-item'>HTML</div>
                    <div className='techs__list-item'>CSS</div>
                    <div className='techs__list-item'>JS</div>
                    <div className='techs__list-item'>React</div>
                    <div className='techs__list-item'>Git</div>
                    <div className='techs__list-item'>Express.js</div>
                    <div className='techs__list-item'>mongoDB</div>
                </div>
            </div>
        </section>
    )
}

export default Techs