import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import { useNavigate, Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import getAllMovies from '../../utils/MoviesApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../utils/CurrentUserContext';
import * as MainApi from '../../utils/MainApi.js';
import { useLocation } from "react-router-dom";



function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [success, setSuccess] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isErrMsg, setIsErrMsg] = React.useState(false);
  const [isSavedMovie, setIsSavedMovie] = React.useState([]);
  const [loginErr, setLoginErr] = React.useState(null);
  const [searchValue, setSearchValue] = React.useState('');
  const [noResult, setNoResult] = React.useState(false);
  const [shortMovies, setShortMovies] = React.useState(true);
  const [searchSavedValue, setSearchSavedValue] = React.useState('');
  const [shortSavedMovies, setShortSavedMovies] = React.useState(true);
  const { pathname } = useLocation();


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      setTimeout(() => {
        MainApi.checkToken(token)
          .then((res) => {
            if (res) {
              setIsLoggedIn(true)
            }
            else {
              setIsLoggedIn(false)
              return
            }
          })
          .catch(err => {
            console.log(`нет токена, брат! ${err}`)
          })

      }, 1000)

    }
    else {
      setIsLoggedIn(false)
      return
    }
  }, [currentUser, isLoggedIn])

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      // setTimeout(() => {
      MainApi.getUserFromSrv(token)
        .then((res) => {
          setCurrentUser(res.user)
        })
      // }, 500)
    }

  }, [isLoggedIn])

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res)
      })
      .then(() => {
        localStorage.setItem('movies', JSON.stringify(movies))
      })
  }, [])

  useEffect(() => {
    if (localStorage.getItem('searchValue')) {
      setSearchValue(localStorage.getItem('searchValue'))
      // setShortMovies(JSON.parse(localStorage.getItem('checkbox')))
    }
  }, []);

  useEffect(() => {
    setShortMovies(JSON.parse(localStorage.getItem('checkbox')))
  }, [])

  useEffect(() => {
    setShortSavedMovies(JSON.parse(localStorage.getItem('savedCheckbox')))
  }, [])

  useEffect(() => {
    if (localStorage.getItem('searchSavedValue')) {
      setSearchSavedValue(localStorage.getItem('searchSavedValue'))
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setTimeout(() => {
      MainApi.getSavedMovies(token)
        .then((res) => {
          setIsSavedMovie(res.filter((movies) => movies.owner === currentUser._id))
          console.log(isSavedMovie)
        })
        .then((res) => {
          localStorage.setItem('isSavedMovie', JSON.stringify(isSavedMovie))
        })
        .catch((err) => {
          console.log('ошибка ', err)
        })
    }, 400)
  }, [currentUser])

  function onRegister({ name, email, password }) {
    MainApi.register({ name: name, email: email, password: password })
      .then(() => {
        onLogin(email, password)
      })
      .then(res => navigate('/movies'))
      .catch(err => {
        console.log('ошибка, брат', err)
        setIsErrMsg(true)
      })
  }

  function onLogin(email, password) {
    MainApi.login({ email: email, password: password })
      .then((res) => {
        setIsLoggedIn(true)
        navigate('/movies')
        // console.log(res)
      })
      .catch(err => {
        console.log('ошибка, брат', err)
        setLoginErr(true);
      })
  }

  function onProfileEdit(user) {
    const token = localStorage.getItem('token');
    MainApi.patchUser(token, user)
      .then((res) => {
        setCurrentUser(res)
        setSuccess(true)
      })
      .catch(err => {
        console.log('ошибка редактирования профиля', err)
        setSuccess(false)
      })
  }

  function onSignOut() {
    localStorage.clear()
    setIsLoggedIn(false)
    navigate('/')
    console.log('Вышел?', isLoggedIn)

    console.log(localStorage.getItem('token'))
  }

  function onSaveMovie(movie) {
    const token = localStorage.getItem('token')

    MainApi.saveMovie(movie, token)
      .then((res) => {
        setIsSavedMovie([...isSavedMovie, res])
      })
  }

  function onDeleteSavedMovie(movies) {
    const token = localStorage.getItem('token')
    const savedMovie = isSavedMovie.find(
      (mov) => mov.movieId === movies.id
    )
    console.log(savedMovie)

    MainApi.deleteSavedMovie(savedMovie, token)
      .then(() => {
        const newMovies = isSavedMovie.filter((mov) =>
          mov._id !== savedMovie._id)
        console.log(newMovies)
        setIsSavedMovie(newMovies)
      })
      .catch(err => {
        console.log('ошибка удаления', err)
      })
  }

  function onDeleteFromSavedMoviesPage(movies) {
    const token = localStorage.getItem('token')
    const savedMovie = isSavedMovie.find(
      (mov) => mov.movieId === movies.movieId
    )
    console.log(savedMovie)

    MainApi.deleteSavedMovie(savedMovie, token)
      .then(() => {
        const newMovies = isSavedMovie.filter((mov) =>
          mov._id !== savedMovie._id)
        console.log(newMovies)
        setIsSavedMovie(newMovies)
      })
      .catch(err => {
        console.log('ошибка удаления', err)
      })
  }

  const filteredMovs = movies.filter((movies) => {
    if (shortMovies === true) {
      return movies.nameRU.toLocaleLowerCase().includes(searchValue)
    }
    else {
      return movies.nameRU.toLocaleLowerCase().includes(searchValue) && movies.duration < 40
    }
  })

  const filteredSavedMovs = isSavedMovie.filter((movies) => {
    if (shortSavedMovies === true) {
      return movies.nameRU.toLocaleLowerCase().includes(searchSavedValue)
    }
    else {
      return movies.nameRU.toLocaleLowerCase().includes(searchSavedValue) && movies.duration < 40
    }
  })


  if (isLoggedIn === null) {
    return <h2>Загрузка...</h2>;
  }

  function openSidebar() {
    setSidebarOpen(true)
    console.log('click')
  }

  function closeSidebar() {
    setSidebarOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        <Routes>

          <Route path='/' element={
            <Main
              isLoggedIn={isLoggedIn}
              openSidebarFunc={openSidebar}
              isSidebarOpen={isSidebarOpen}
              closeSidebar={closeSidebar}
            />
          } />

          <Route path='/movies' element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <Movies
                movies={movies}
                openSidebarFunc={openSidebar}
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
                onSaveMovie={onSaveMovie}
                onDeleteSavedMovie={onDeleteSavedMovie}
                isSavedMovie={isSavedMovie}
                filteredMovs={filteredMovs}
                noResult={noResult}
                setNoResult={setNoResult}
                shortMovies={shortMovies}
                setShortMovies={setShortMovies}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setSearchSavedValue={setSearchSavedValue}
                searchSavedValue={searchSavedValue}
              />
            </ProtectedRoute>
          } />

          <Route path='/saved-movies' element={
            <ProtectedRoute loggedIn={isLoggedIn}>
              <SavedMovies
                movies={movies}
                openSidebarFunc={openSidebar}
                isSidebarOpen={isSidebarOpen}
                closeSidebar={closeSidebar}
                isSavedMovie={isSavedMovie}
                filteredSavedMovs={filteredSavedMovs}
                onDeleteSavedMovie={onDeleteFromSavedMoviesPage}
                noResult={noResult}
                setNoResult={setNoResult}
                shortMovies={shortMovies}
                setShortMovies={setShortMovies}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
                setSearchSavedValue={setSearchSavedValue}
                searchSavedValue={searchSavedValue}
                setShortSavedMovies={setShortSavedMovies}
                shortSavedMovies={shortSavedMovies}
              />
            </ProtectedRoute>
          } />

          <Route
            path='/profile'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Profile
                  submitProfileEdit={onProfileEdit}
                  signOut={onSignOut}
                  openSidebarFunc={openSidebar}
                  isSidebarOpen={isSidebarOpen}
                  closeSidebar={closeSidebar}
                  success={success}
                  setSuccess={setSuccess}
                />
              </ProtectedRoute>
            }
          />

          <Route path='/sign-up' element={
            <ProtectedRoute loggedIn={!isLoggedIn}>
              <Register
                submitReg={onRegister}
                isErrMsg={isErrMsg}
              />
            </ProtectedRoute>
          } />

          <Route path='/sign-in' element={
            <ProtectedRoute loggedIn={!isLoggedIn}>
              <Login
                submitLogin={onLogin}
                loginErr={loginErr}
              />
            </ProtectedRoute>
          } />

          <Route path='*' element={
            <NotFound />
          } />

        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
