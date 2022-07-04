import './Movies.css'
import React from "react";
import HeaderLoggedin from "../Header/HeaderLoggedin";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab'


let moviesCount = 5;
let moviesAddCount = 2;

function onResize() {
    if (window.innerWidth >= 1280) {
        moviesCount = 12
        moviesAddCount = 3
    }
    else if (window.innerWidth >= 768) {
        moviesCount = 8
        moviesAddCount = 2
    }
    else if (window.innerWidth <= 480) {
        moviesCount = 5
        moviesAddCount = 2
    }
}

window.onresize = () => {
    setTimeout(onResize, 1000)
}
onResize()

function Movies({
    movies,
    isSidebarOpen,
    closeSidebar,
    openSidebarFunc,
    onSaveMovie,
    onDeleteSavedMovie,
    isSavedMovie,
    cards,
    filteredMovs,
    setNoResult,
    setSearchValue,
    searchValue,
    setShortMovies,
    shortMovies,
    noResult,
    searchSavedValue,
    setSearchSavedValue }) {

    const [displayedMovies, setDisplayedMovies] = React.useState(moviesCount)


    setTimeout(() => {
        if (filteredMovs.length === 0) {
            setNoResult(true)
        }
        else {
            setNoResult(false)
        }
    }, 1000)

    let slicedMovies = filteredMovs.slice(0, displayedMovies)

    function handleMoreMovies(evt) {
        evt.preventDefault()
        console.log(displayedMovies)
        setDisplayedMovies(displayedMovies + moviesAddCount)
    }

    return (

        <section className="movies">
            <NavTab
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                buttonClicked={openSidebarFunc}
            />
            <SearchForm
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setShortMovies={setShortMovies}
                shortMovies={shortMovies}
                setSearchSavedValue={setSearchSavedValue}
                searchSavedValue={searchSavedValue}
            />
            {noResult ?
                <div className='movies__noresult'>Ничего не найдено</div>
                :
                <>
                    <MoviesCardList
                        movies={movies}
                        onSaveMovie={onSaveMovie}
                        onDeleteSavedMovie={onDeleteSavedMovie}
                        isSavedMovie={isSavedMovie}
                        cards={cards}
                        noResult={noResult}
                        filteredMovs={slicedMovies}
                    />
                    {displayedMovies <= filteredMovs.length && (
                        <Preloader
                            handleMoreMovies={handleMoreMovies}
                        />)}

                </>
            }
            <Footer />
        </section>
    )
}

export default Movies