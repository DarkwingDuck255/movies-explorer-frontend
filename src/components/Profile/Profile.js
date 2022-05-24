import './Profile.css';
import React from 'react';
import HeaderLoggedin from '../Header/HeaderLoggedin';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
// import {useFormWithValidation} from "../../utils/formValidate";
import { CurrentUserContext } from '../../utils/CurrentUserContext';

export default function Profile(props) {
    const currentUser = React.useContext(CurrentUserContext)
    const [userName, setUserName] = React.useState(currentUser.name);
    const [userEmail, setUserEmail] = React.useState(currentUser.email);
    const [isSidebarOpen, setSidebarOpen] = React.useState(false);
    // const [error, setErr] = React.useState(false);
    // const {values, handleChange, isValid, errors, resetForm} = useFormWithValidation();

    
// -----------------------------------------------------------------
    // function submitForm(evt) {
    //     evt.preventDefault()
    //     if (values.user.name === currentUser.name || values.user.email === currentUser.email ) {
    //         setErr()
    //     }
    //     else {
    //         props.submitProfileEdit(values.name || currentUser.name, values.email || currentUser.email)
    //         resetForm()
    //     }
    // }

    function handleChangeName(evt) {
        setUserName(evt.target.value);
    }

    function handleChangeEmail(evt) {
        setUserEmail(evt.target.value)
      }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.submitProfileEdit({name: userName, email: userEmail})
    }

    function openSidebar() {
        setSidebarOpen(true)
        console.log('click')
    }

    function closeSidebar() {
        setSidebarOpen(false)
    }

    // function signOut(token) {
    //     props.setIsLoggedIn(false)
    //     localStorage.removeItem('token')
    // }

    return (
        <>
            <NavTab 
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                ButtonClicked={openSidebar}
            />
            <section className='profile'>
                <h2 className='profile__greeting'>{`Хеллоу, ${currentUser.name}`}</h2>
                <form className='profile__edit-form' onSubmit={handleSubmit}>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            Имя
                        </label>
                        <input className='profile__edit-input' required minLength="2" maxLength="30" type='text' name='name' autoComplete='off' placeholder={currentUser.name} onChange={handleChangeName}/>
                    </div>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            E-mail
                        </label>
                        <input className='profile__edit-input' required name='email' type='email' autoComplete='off' placeholder={currentUser.email} onChange={handleChangeEmail}/>
                    </div>
                    <button type='submit' className='profile__submit common__link'>
                        Редактировать
                    </button>
                </form>
                <Link to='/sign-in' className='profile__signout common__link' onClick={props.signOut}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}