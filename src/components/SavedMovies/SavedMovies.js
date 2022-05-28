import './SavedMovies.css'
import React from "react";
import HeaderLoggedin from "../Header/HeaderLoggedin";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import NavTab from '../NavTab/NavTab';


function SavedMovies({movies, openSidebarFunc, isSidebarOpen, closeSidebar }) {

    // const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    // function openSidebar() {
    //     setSidebarOpen(true)
    //     console.log('click')
    // }

    // function closeSidebar() {
    //     setSidebarOpen(false)
    // }
// тут будут только добавленные в избранное

    return (
        <section className='SavedMovies'>
            <NavTab
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                buttonClicked={openSidebarFunc}
            />
            <SearchForm/>
            <MoviesCardList
                movies={movies}
            />
            <Footer/>
        </section>
    )
}

export default SavedMovies