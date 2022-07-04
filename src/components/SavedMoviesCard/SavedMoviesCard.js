import '../MoviesCard/MoviesCard.css'
import React from "react";


function SavedMoviesCard({ savingMovie, cards, onDeleteSavedMovie, isSavedMovie, noResult, setNoResult, shortMovies, setShortMovies, setSearchValue, trailerLink, ...props }) {

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
                <button className='movies-card__card-button_saved' onClick={deleteFromSaved} />
            </div>
            <a href={trailerLink}>
                <img className='movies-card__image' src={props.url} alt={props.name} />
            </a>
        </div>
    )
}

export default SavedMoviesCard