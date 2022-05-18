import './Header.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import descriptionLogo from "../../images/somedescrLogo.svg"

function Header(props) {
    function signup(){
        //функция передачи пропсов реги
    }
    
    function signin() {
        //функция передачи пропсов входа
    }

    return(
        <header className='header'>
            <div className='header__section'>
                <div className='header__wrap'>
                    <img src={logo} className='header__logo' alt="Логотип"/>
                    <nav className='header__nav'>
                        <Link to='/sign-up' className='header__reg-link common__link' type='button' onClick={signup}>
                            Регистрация
                        </Link>
                        <Link to='/sign-in' className='header__signin-link common__link' type='button' onClick={signin}>
                            Войти
                        </Link>
                    </nav>
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
                    <img src={descriptionLogo} className='header__description-logo' alt='логотип заголовка'/> 
                </div>
            </div>
            <div className='header__underline'></div>
        </header>
    )
}

export default Header
