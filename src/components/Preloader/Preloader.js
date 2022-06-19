import './Preloader.css'
import React from "react";

function Preloader({ handleMoreMovies }) {

    return (
        <>
            <button className='movies-card-list__button-more' type='button' onClick={handleMoreMovies}>Ещё</button>
        </>
    )
}

export default Preloader