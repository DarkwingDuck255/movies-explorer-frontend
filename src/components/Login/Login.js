import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

export default function Login() {


    return (
        <>
        <section className='register'>
            <Link to='/'className='register__header'>
                <img src={logo} className='register__logo' alt="Логотип"/>
            </Link>
            <h2 className='register__greeting'>
                Рады Видеть!
            </h2>

            <form className='register__form'>
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' type='email'/>
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' type='password'/>

                <button className='register__submit login__button' type='submit'>
                    Войти
                </button>
            </form>
            <p className='register__singin-suggest'>
                Ещё не зарегистрированы? <Link to='/sign-up' className='register__singin-link common__link'>Регистрация</Link>
            </p>
        </section>
        </>
    )
}