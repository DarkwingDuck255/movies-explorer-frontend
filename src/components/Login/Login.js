import './Login.css'
import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import {useFormWithValidation} from "../../utils/formValidate";

export default function Login(props) {

    // const [error, setErr] = React.useState(false);
    const {values, handleChange, isValid, resetForm} = useFormWithValidation();

    function submitForm(evt) {
        evt.preventDefault()
        resetForm()
        if (isValid) {
            props.submitLogin(values)
            // setErr(false)
        }
        // if (errors) {
        //     setErr(true)
        // }
    }
    return (
        <>
        <section className='register'>
            <Link to='/'className='register__header'>
                <img src={logo} className='register__logo' alt="Логотип"/>
            </Link>
            <h2 className='register__greeting'>
                Рады Видеть!
            </h2>

            <form className='register__form' onSubmit={submitForm}>
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' type='email' name='email' required onChange={handleChange}/>
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' type='password' required name='password' minLength='8' onChange={handleChange}/>

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