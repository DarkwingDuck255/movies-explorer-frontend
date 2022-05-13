import './NavTab.css';
import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../images/avatar.svg'
import closeBtn from '../../images/close-button.svg'


export default function NavTab(props) {
    

    return (
        <div className= {`nav-tab ${props.openSidebarBtnClicked ? `nav-tab_open` : ''}`}>
            <button type='button' className='nav-tab__close-button' onClick={props.closeSidePopup}>
            </button>
            {/* <div className='nav-tab__menu-wrap'> */}
                <div className='nav-tab__menu'>
                    <Link to='/' className='nav-tab__menu-link common__link'>
                        Главная
                    </Link>
                    <Link to='/movies' className='nav-tab__menu-link common__link'>
                        Фильмы
                    </Link>
                    <Link to='/saved-movies' className='nav-tab__menu-link common__link'>
                        Сохраненные фильмы
                    </Link>

                    <Link to='/profile' className="nav-tab__profile-link common__link">
                        <p className='nav-tab__profile-name'>Аккаунт</p>
                        <div className="nav-tab__profile-container">
                            <img src={avatar} className='nav-tab__profile-avatar' alt="Мини-аватарка"></img>
                        </div>
                    </Link>
                </div>
                
            </div>
            
            
        // </div>
    )
}