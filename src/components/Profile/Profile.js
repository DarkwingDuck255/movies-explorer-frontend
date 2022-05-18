import './Profile.css';
import React from 'react';
import HeaderLoggedin from '../Header/HeaderLoggedin';
import { Link } from 'react-router-dom';
import NavTab from '../NavTab/NavTab';

export default function Profile() {

    const [isSidebarOpen, setSidebarOpen] = React.useState(false);

    function openSidebar() {
        setSidebarOpen(true)
        console.log('click')
    }

    function closeSidebar() {
        setSidebarOpen(false)
    }
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
                <h2 className='profile__greeting'>Хеллоу, Создатель</h2>
                <form className='profile__edit-form'>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            Имя
                        </label>
                        <input className='profile__edit-input' placeholder='Создатель'/>
                    </div>
                    <div className='profile__edit-wrap'>
                        <label className='profile__edit-label'>
                            E-mail
                        </label>
                        <input className='profile__edit-input' placeHolder='creator@email.ru'/>
                    </div>
                    <button type='submit' className='profile__submit common__link'>
                        Редактировать
                    </button>
                </form>
                <Link to='/sign-in' className='profile__signout common__link'>Выйти из аккаунта</Link>
            </section>
        </>
    )
}