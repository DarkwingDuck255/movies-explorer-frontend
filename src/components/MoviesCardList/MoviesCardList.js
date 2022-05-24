import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
// import initialCards from '../../utils/constants';
// import '../../images/movies/1.svg'


function MoviesCardList({movies}) {
    

    return (
        <>
        <div className='movies-card-list'>
            {movies.map((cards) => {  
              
                return (
                    <MoviesCard
                        name={cards.nameRU}
                        duration={cards.duration}
                        link={`https://api.nomoreparties.co${cards.image.url}`}
                        key={cards.id}
                    />
                )
            })}
            
        </div>
        </>
    )

}
export default MoviesCardList