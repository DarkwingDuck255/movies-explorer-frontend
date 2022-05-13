import React from "react";
import './SearchForm.css';

function SearchForm() {


    return (
        <form className="seach-form">
            <div className="seach-form__container">
                <input className="seach-form__imput" placeholder="Фильм" name="movie">
                </input>
                <input type='submit' className="seach-form__imput-submit" value=''/>
            </div>
            <div className='seach-form__switch-wrap'>
                <p className="seach-form__switch-description">Короткометражки</p>
                <label className="seach-form__switch">
                    <input type="checkbox" name="movie"/>
                    <span className="seach-form__slider seach-form__round"></span>
                </label>
            </div>
        </form>
    )
}

export default SearchForm