import './Profile.css';
import React from 'react';
import HeaderLoggedin from '../Header/HeaderLoggedin';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';
import { CurrentUserContext } from '../../utils/CurrentUserContext';


export default function Profile({ openSidebarFunc, isSidebarOpen, closeSidebar, signOut, ...props }) {
    const currentUser = React.useContext(CurrentUserContext)
    const [userName, setUserName] = React.useState(currentUser.name);
    const [userEmail, setUserEmail] = React.useState(currentUser.email);
    const [isbuttonInactive, setButtonInactive] = React.useState(true);


    // -----------------------------------------------------------------


    function handleChangeName(evt) {
        setUserName(evt.target.value);
        setButtonInactive(false);
    }

    function handleChangeEmail(evt) {
        setUserEmail(evt.target.value)
        setButtonInactive(false);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.submitProfileEdit({ name: userName, email: userEmail })
        window.location.reload(false);
    }



    return (
        <>
            <NavTab
                openSidebarBtnClicked={isSidebarOpen}
                closeSidePopup={closeSidebar}
            />
            <HeaderLoggedin
                buttonClicked={openSidebarFunc}
            />
            <section className='profile'>
                <h2 className='profile__greeting'>{`Хеллоу, ${currentUser.name}`}</h2>
                <form className='profile__edit-form' onSubmit={handleSubmit}>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            Имя
                        </label>
                        <input className='profile__edit-input' minLength="2" maxLength="30" type='text' name='name' autoComplete='off' placeholder={currentUser.name} onChange={handleChangeName} />
                    </div>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            E-mail
                        </label>
                        <input className='profile__edit-input' name='email' type='email' autoComplete='off' placeholder={currentUser.email} onChange={handleChangeEmail} />
                    </div>
                    <button type='submit' disabled={isbuttonInactive ? true : false} className={`${isbuttonInactive ? 'profile__submit_inactive' : 'profile__submit common__link'}`}>
                        Редактировать
                    </button>
                </form>
                <Link to='/sign-in' className='profile__signout common__link' onClick={signOut}>Выйти из аккаунта</Link>
            </section>
        </>
    )
}