import './SavedMovies.css'
import React from "react";
import HeaderLoggedin from "../Header/HeaderLoggedin";
import SearchForm from "../SearchForm/SearchForm"
import Footer from '../Footer/Footer'
import NavTab from '../NavTab/NavTab';
import SavedMoviesCard from '../SavedMoviesCard/SavedMoviesCard';


function SavedMovies({ openSidebarFunc,
    isSidebarOpen,
    closeSidebar,
    onSaveMovie,
    onDeleteSavedMovie,
    noResult,
    setNoResult,
    shortMovies,
    setShortMovies,
    searchValue,
    setSearchValue,
    filteredSavedMovs,
    searchSavedValue,
    setSearchSavedValue,
    setShortSavedMovies,
    shortSavedMovies }) {

    setTimeout(() => {
        if (filteredSavedMovs.length === 0) {
            setNoResult(true)
        }
        else {
            setNoResult(false)
        }
    }, 1000)

    return (
        <section className='saved-movies'>
            <>
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
                    setShortSavedMovies={setShortSavedMovies}
                    shortSavedMovies={shortSavedMovies}
                />
                {noResult ?
                    <div className='movies__noresult'>Ничего не найдено</div>
                    :

                    <div className='movies-card-list' >
                        {
                            filteredSavedMovs.map((cards) => {
                                function getTimeFromMins(mins) {
                                    let hours = Math.trunc(mins / 60);
                                    let minutes = mins % 60;
                                    return hours + 'ч ' + minutes + 'мин';
                                };
                                return (


                                    <SavedMoviesCard
                                        name={cards.nameRU}
                                        duration={getTimeFromMins(cards.duration)}
                                        url={cards.image}
                                        key={cards.movieId}
                                        cards={cards}
                                        savingMovie={onSaveMovie}
                                        onDeleteSavedMovie={onDeleteSavedMovie}
                                        trailerLink={cards.trailerLink}
                                    />




                                )

                            })
                        }
                    </div>

                }

                <Footer />

            </>
        </section >
    )
}

export default SavedMovies