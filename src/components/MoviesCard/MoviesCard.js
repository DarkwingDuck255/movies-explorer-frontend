import './MoviesCard.css'
import React from "react";
import { useLocation } from 'react-router-dom';

function MoviesCard({ savingMovie, cards, onDeleteSavedMovie, isSavedMovie, trailerLink, ...props }) {

    const { pathname } = useLocation();

    function addToFavourites() {
        console.log('xxx')
        savingMovie(cards)
    }

    function deleteFromSaved() {
        console.log('zzz')
        onDeleteSavedMovie(cards)
    }

    return (
        <div className='movies-card'>
            <div className='movies-card__card-button-wrap'>
                <div className='movies-card__card-title-wrap'>
                    <h4 className='movies-card__title'>{props.name}</h4>
                    <p className='movies-card__duration'>{props.duration}</p>
                </div>
                <button className={`${isSavedMovie.some((movie) =>
                    movie.movieId === cards.id
                ) && cards.id ? `movies-card__card-button_active` : `movies-card__card-button_inactive`}`} onClick={isSavedMovie.some((movie) =>
                    movie.movieId === cards.id
                ) && cards.id ? deleteFromSaved : addToFavourites} />
            </div>
            <a href={trailerLink} target='_blank'>
                <img className='movies-card__image' src={props.url} alt={props.name} />
            </a>
        </div>
    )
}

export default MoviesCard