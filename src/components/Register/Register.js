import './Register.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import {useFormWithValidation} from "../../utils/formValidate";

export default function Register(props) {
    const [error, setErr] = useState(false);
    const {values, handleChange, isValid, errors, resetForm} = useFormWithValidation();

    function submitForm(evt) {
        evt.preventDefault()
        resetForm()
        if (isValid) {
            props.submitReg(values)
            setErr(false)
        }
        if (errors) {
            setErr(true)
        }
    }

    return(
        <section className='register'>
            <Link to='/'className='register__header'>
                <img src={logo} className='register__logo' alt="Логотип"/>
            </Link>
            <h2 className='register__greeting'>
                Добро пожаловать!
            </h2>

            <form className='register__form' onSubmit={submitForm}>
                <label className='register__input-label'>
                    Имя
                </label>
                <input className='register__input' type='text' minLength="2" maxLength="30" required name='name' onChange={handleChange} autoComplete='off'/>
                <span className='register__error'>{errors.name}</span>
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' type='email' name='email' required onChange={handleChange} autoComplete='off'/>
                <span className='register__error'>{errors.email}</span>
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' type='password' required name='password' minLength='8' onChange={handleChange} autoComplete='off'/>
                <p className={`err ${error ? 'display__err' : ''}`}>Что-то пошло не так...</p>
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