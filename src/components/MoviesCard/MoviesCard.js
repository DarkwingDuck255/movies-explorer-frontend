import './MoviesCard.css'
import React from "react";
// import { useState } from 'react';




function MoviesCard(props) {
    const [ active, setActive ] = React.useState(false);

    function addToFavourites() {
        setActive(true)
    }

    return (
        <div className='movies-card'>
            <div className='movies-card__card-button-wrap'>
                <div className='movies-card__card-title-wrap'>
                    <h4 className='movies-card__title'>{props.name}</h4>
                    <p className='movies-card__duration'>{props.duration}</p>
                </div>
                <button className={`${active ? `movies-card__card-button_active` : `movies-card__card-button_inactive`}`} onClick={addToFavourites}/>
            </div>
            <img className='movies-card__image' src={props.link} alt={props.name}/>
        </div>
    )
}

export default MoviesCard