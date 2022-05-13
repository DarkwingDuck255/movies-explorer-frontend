import './SavedMovies.css'
import React from "react";
import HeaderLoggedin from "../Header/HeaderLoggedin";
import SearchForm from "../SearchForm/SearchForm"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import Footer from '../Footer/Footer'
import NavTab from '../NavTab/NavTab';


function SavedMovies(props) {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    function openSidebar() {
        setSidebarOpen(true)
        console.log('click')
    }

    function closeSidebar() {
        setSidebarOpen(false)
    }
// тут будут только добавленные в избранное

    return (
        <section className='SavedMovies'>
            <NavTab
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                ButtonClicked={openSidebar}
            />
            <SearchForm/>
            <MoviesCardList/>
            <Footer/>
        </section>
    )
}

export default SavedMovies