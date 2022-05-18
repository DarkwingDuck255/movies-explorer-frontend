import './Register.css'
import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

export default function Register() {


    return(
        <section className='register'>
            <Link to='/'className='register__header'>
                <img src={logo} className='register__logo' alt="Логотип"/>
            </Link>
            <h2 className='register__greeting'>
                Добро пожаловать!
            </h2>

            <form className='register__form'>
                <label className='register__input-label'>
                    Имя
                </label>
                <input className='register__input' type='text'/>
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' type='email'/>
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' type='password'/>

                <button className='register__submit' type='submit'>
                    Зарегистрироваться
                </button>
            </form>
            <p className='register__singin-suggest'>
                Уже зарегистрированы? <Link to='/sign-in' className='register__singin-link common__link'>Войти</Link>
            </p>
        </section>
    )
}