import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import avatar from '../../images/avatar.svg';
import navButton from '../../images/header-nav-button.svg';



function HeaderLoggedin({ buttonClicked }, props) {

    return (
        <div className='header__wrap'>
            <Link to='/' >
                <img src={logo} className='header__logo' alt="Логотип" />
            </Link>
            <nav className='header__nav_loggedin'>
                <Link to='/movies' className='header__nav-link common__link'>Фильмы</Link>
                <Link to='/saved-movies' className='header__nav-link common__link'>Сохранённые фильмы</Link>
            </nav>
            <Link to='/profile' className="header__profile-link common__link">
                <p className='header__profile-name'>Аккаунт</p>
                <div className="header__profile-container">
                    <img src={avatar} className='header__profile-avatar' alt="Мини-аватарка"></img>
                </div>
            </Link>
            <button className="header__nav-button header__nav-button_active" type="button" onClick={buttonClicked}>
                <img src={navButton} className='header__nav-button-image' alt="меню" />
            </button>

        </div>
    )
}

export default HeaderLoggedin