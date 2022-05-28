import './Register.css'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../images/logo.svg";
import { useFormValidation } from "../../utils/formValidate";

export default function Register(props) {
    const [error, setErr] = useState(false);
    // const {values, handleChange, isValid, errors, resetForm} = useFormValidation();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // function submitForm(evt) {
    //     evt.preventDefault()

    //     if (isValid) {
    //         props.submitReg(values.name, values.email, values.password)

    //     }
    //     if (errors) {
    //         resetForm()
    //         setErr(true)
    //     }

    // }


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

    // function onChangeBothFunc(e) {
    //     handleChange(e)
    //     if (isValid) {
    //         setButtonInactive(false)
    //     }

    //     else {
    //         setButtonInactive(true)
    //     }

    // }

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
                <input className='register__input' id='name' type='text' minLength="2" maxLength="30" required name='name' onChange={handleNameInput} autoComplete='off' />
                {/* <span className='register__error'>{errors.name}</span> */}
                <label className='register__input-label'>
                    E-mail
                </label>
                <input className='register__input' id='email' type='email' name='email' required onChange={handleEmailInput} autoComplete='off' />
                {/* <span className='register__error'>{errors.email}</span> */}
                <label className='register__input-label'>
                    Пароль
                </label>
                <input className='register__input' id='password' type='password' required name='password' minLength='8' onChange={handlePasswordInput} autoComplete='off' />
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