import './MoviesCardList.css'
import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';
import initialCards from '../../utils/constants';
// import '../../images/movies/1.svg'


function MoviesCardList() {
    //необходимо добавить кнопку удаления из избранного если текущий путь /saved-movies


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