import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import descriptionLogo from "../../images/somedescrLogo.svg"
import avatar from '../../images/avatar.svg';
import navButton from '../../images/header-nav-button.svg';

function Header({ isLoggedIn, buttonClicked }, props) {


    return (
        <header className='header'>
            <div className='header__section'>
                <div className={`header__wrap ${isLoggedIn ? 'header__wrap_is-logged-in' : ''}`} >
                    {isLoggedIn && (
                        // <div className='header__wrap_is-logged-in'>
                        <>
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
                        </>
                        // </div>

                    )}
                    {!isLoggedIn && (

                        <>
                            <Link to='/' >
                                <img src={logo} className='header__logo' alt="Логотип" />
                            </Link>

                            <nav className='header__nav'>
                                <Link to='/sign-up' className='header__reg-link common__link' type='button'>
                                    Регистрация
                                </Link>
                                <Link to='/sign-in' className='header__signin-link common__link' type='button'>
                                    Войти
                                </Link>

                            </nav>
                        </>

                    )}
                </div>
                <div className='header__description'>
                    <div className='header__desctiption-wrap'>
                        <h1 className='header__title'>
                            Учебный проект студента факультета Веб-разработки.
                        </h1>
                        <p className='header__subtitle'>
                            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
                        </p>
                        <Link to='/movies' type='button' className='header__learn-more commpn__link'>Узнать больше</Link>
                    </div>
                    <img src={descriptionLogo} className='header__description-logo' alt='логотип заголовка' />
                </div>
                <div className='header__underline'></div>

            </div>

        </header>
    )
}

export default Header
