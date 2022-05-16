import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import initialCards from '../../utils/constants';
// import '../../images/movies/1.svg'


function MoviesCardList() {
    

    return (
        <>
        <div className='movies-card-list'>
            {initialCards.map((cards) => {  
              
                return (
                    <MoviesCard
                        name={cards.name}
                        duration={cards.duration}
                        link={cards.link}
                    />
                )
            })}
            
        </div>
        </>
    )

}
export default MoviesCardList