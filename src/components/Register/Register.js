import './Register.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";

export default function Register(props) {
    const [error, setErr] = useState(false);
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'

    function handleNameInput(evt) {
        setName(evt.target.value)
    }
    function handleEmailInput(evt) {
        setEmail(evt.target.value)
    }

    function handlePasswordInput(evt) {
        setPassword(evt.target.value)
    }

    function handleRegister(evt) {
        evt.preventDefault()
        props.submitReg({name, email, password})
    }

    return (
        <section className='register'>
            <Link to='/' className='register__header'>
                <img src={logo} className='register__logo' alt="Логотип" />
            </Link>
            <h2 className='register__greeting'>
                Добро пожаловать!
            </h2>

            <form className='register__form' onSubmit={handleRegister}>
                <label className='register__input-label'>
                    Имя
                </label>
                <input className='register__input' id='name' type='name' minLength="2" maxLength="30" required name='name' onChange={handleNameInput} autoComplete='off' />
                {/* <span className='register__error'>{errors.name}</span> */}
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' id='email' type='email' pattern={emailPattern} name='email' required onChange={handleEmailInput} autoComplete='off' />
                {/* <span className='register__error'>{errors.email}</span> */}
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' id='password' type='password' required name='password' minLength='8' onChange={handlePasswordInput} autoComplete='off' />
                <p className={`err ${error ? 'display__err' : 'err'}`}>Что-то пошло не так...</p>
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