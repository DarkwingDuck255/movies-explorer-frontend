import React from "react";
import { useLocation } from "react-router-dom";
import useSound from 'use-sound';
import './SearchForm.css';
import url from '../../sound/sanya.mp3'

function SearchForm({
    setSearchValue,
    searchValue,
    setShortMovies,
    shortMovies,
    setSearchSavedValue,
    searchSavedValue,
    setShortSavedMovies,
    shortSavedMovies
}) {

    const [text, setText] = React.useState(searchValue)
    const [textSaved, setTextSaved] = React.useState(searchSavedValue)
    const { pathname } = useLocation()

// Пасхалочка шутки ради
    const [play] = useSound(url);
    function playSound() {
        if (text === 'саня') {
            play()
        }
    }
// -----------


    function handleChange(evt) {
        if (pathname === '/movies') {
            setText(evt.target.value);
        }
        else {
            setTextSaved(evt.target.value)
        }
    };

    function onSearchSubmit(evt) {
        evt.preventDefault();
        // localStorage.setItem('searchValue', text)
        // setSearchValue(text.toLowerCase())
        if (pathname === '/movies') {
            localStorage.setItem('searchValue', text)
            setSearchValue(text.toLowerCase())
            console.log('searching from all')
        }
        // else if (pathname === '/saved-movies') {
        //     localStorage.setItem('searchSavedValue', textSaved)
        //     setSearchSavedValue(textSaved.toLowerCase())
        //     console.log('searching from saved')
        // }
    }


    const updateShort = (shortMovies) => {
        if (pathname === '/movies') {
            setShortMovies(shortMovies)
            localStorage.setItem('checkbox', JSON.stringify(shortMovies))
        }
        else if (pathname === '/saved-movies') {
            setShortSavedMovies(shortMovies)
            localStorage.setItem('savedCheckbox', JSON.stringify(shortMovies))
        }

    }




    return (
        <form className="seach-form" onSubmit={onSearchSubmit}>
            <div className="seach-form__container">
                <input className="seach-form__imput" placeholder="Фильм" value={pathname === '/saved-movies' ? textSaved : text} name="movie" onChange={handleChange}>
                </input>
                <button type='submit' className="seach-form__imput-submit common__link" onClick={playSound} />
            </div>
            <div className='seach-form__switch-wrap'>
                <p className="seach-form__switch-description">Короткометражки</p>
                <label className="seach-form__switch">
                    <input type="checkbox" name="movie" checked={pathname === '/movies' ? !shortMovies : !shortSavedMovies} onChange={() => updateShort(pathname === '/movies' ? !shortMovies : !shortSavedMovies)} />
                    <span className="seach-form__slider seach-form__round" ></span>
                </label>
            </div>
        </form>
    )
}

export default SearchForm