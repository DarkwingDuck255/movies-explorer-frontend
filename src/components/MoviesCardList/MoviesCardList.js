import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
// import initialCards from '../../utils/constants';
// import '../../images/movies/1.svg'


function MoviesCardList({ movies, onSaveMovie, onDeleteSavedMovie, isSavedMovie, filteredMovs }) {


    return (
        <>
            <div className='movies-card-list' >
                {filteredMovs.map((movies) => {
                    function getTimeFromMins(mins) {
                        let hours = Math.trunc(mins / 60);
                        let minutes = mins % 60;
                        return hours + 'ч ' + minutes + 'мин';
                    };


                    return (
                        <>
                            <MoviesCard
                                name={movies.nameRU}
                                duration={getTimeFromMins(movies.duration)}
                                url={`https://api.nomoreparties.co${movies.image.url}`}
                                key={movies.id}
                                cards={movies}
                                savingMovie={onSaveMovie}
                                onDeleteSavedMovie={onDeleteSavedMovie}
                                isSavedMovie={isSavedMovie}
                                trailerLink={movies.trailerLink}
                            />

                        </>
                    )
                })}

            </div>
        </>
    )

}
export default MoviesCardList