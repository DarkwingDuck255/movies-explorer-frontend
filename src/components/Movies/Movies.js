import './Movies.css'
import React from "react";
import HeaderLoggedin from "../Header/HeaderLoggedin";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from '../Preloader/Preloader';
import Footer from '../Footer/Footer';
import NavTab from '../NavTab/NavTab'

function Movies({movies}) {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    function openSidebar() {
        setSidebarOpen(true)
        console.log('click')
    }

    function closeSidebar() {
        setSidebarOpen(false)
    }

    return (
        
        <section className="movies">
            <NavTab
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                ButtonClicked={openSidebar}
                // sidebarClosed={isSidebarOpen}
            />
            <SearchForm/>
            <MoviesCardList
                movies={movies}
            />
            <Preloader/>
            <Footer/>
        </section>
    )
}

export default Movies