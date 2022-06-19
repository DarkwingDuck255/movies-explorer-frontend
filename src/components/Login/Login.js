import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import { useFormValidation } from "../../utils/formValidate";

const emailPattern = '[a-z0-9]+@[a-z]+\.[a-z]{2,3}'

export default function Login({ loginErr, ...props }) {

    const { values, handleChange, isValid, resetForm } = useFormValidation();

    function submitForm(evt) {
        evt.preventDefault()
        resetForm()
        if (isValid) {
            props.submitLogin(values)
        }
    };

    return (
        <>
            <section className='register'>
                <Link to='/' className='register__header'>
                    <img src={logo} className='register__logo' alt="Логотип" />
                </Link>
                <h2 className='register__greeting'>
                    Рады Видеть!
                </h2>

                <form className='register__form' onSubmit={submitForm}>
                    <label className='register__input-label'>
                        E-mail
                    </label>
                    <input className='register__input' type='email' pattern={emailPattern} name='email' required onChange={handleChange} autoComplete='false' />
                    <label className='register__input-label'>
                        Пароль
                    </label>
                    <input className='register__input' type='password' required name='password' minLength='8' onChange={handleChange} />

                    <p className={`${loginErr === true ? 'display__err' : 'err'}`}>Неверный логин или пароль</p>

                    <button className={`${isValid ? 'register__submit' : 'register__submit_inactive'} login__button`} type='submit' disabled={!isValid}>
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