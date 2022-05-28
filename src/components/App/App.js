import './App.css';
import React, { useEffect, useState } from 'react';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import { useNavigate, Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import getAllMovies from '../../utils/MoviesApi.js';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { CurrentUserContext } from '../../utils/CurrentUserContext'
// import {register, login, checkToken} from '../../utils/MainApi.js';
import * as MainApi from '../../utils/MainApi.js';
// import Header from '../Header/Header';


function App() {
  // const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [movies, setMovies] = useState([]);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isErrMsg, setIsErrMsg] = React.useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setTimeout(() => {
        MainApi.checkToken(token)
          .then((res) => {
            // setIsLoggedIn(true)
            if (res) {
              setIsLoggedIn(true)
              // console.log(currentUser, isLoggedIn, 'шляпа')
            }
            else {
              setIsLoggedIn(false)
              return
            }
          })

          // .then(() => {
          //   console.log('статус логина', isLoggedIn)
          //   console.log('есть токен при загрузке страницы?', localStorage.getItem('token'))
          // })

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
      setTimeout(() => {
        MainApi.getUserFromSrv(token)
          .then((res) => {
            setCurrentUser(res.user)
          })
        // .then(()=> {
        //   console.log('текущий юзер?', currentUser)
        // })
      }, 500)
    }
  }, [isLoggedIn])

  useEffect(() => {
    getAllMovies()
      .then((res) => {
        setMovies(res)
      })
  }, [])


  function onRegister(name, email, password) {
    MainApi.register(name, email, password)
      .then(res => navigate('/movies'))
      .catch(err => {
        console.log('ошибка, брат', err)
        setIsErrMsg(true)
      })
  }

  function onLogin(data) {
    MainApi.login(data)
      .then((res) => {
        setIsLoggedIn(true)
        navigate('/profile')
        // console.log(res)
      })
      .catch(err => {
        console.log('ошибка, брат', err)
      })
  }

  function onProfileEdit(user) {
    const token = localStorage.getItem('token');
    // console.log(token)
    MainApi.patchUser(token, user)
      .then((res) => {
        setCurrentUser(res)
      })
  }

  function onSignOut() {
    localStorage.removeItem('token');
    setIsLoggedIn(false)
    console.log('Вышел?', isLoggedIn)

    console.log(localStorage.getItem('token'))
  }

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
        {/* <Header isLoggedIn={isLoggedIn}/> */}
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
            <Movies
              movies={movies}
              openSidebarFunc={openSidebar}
              isSidebarOpen={isSidebarOpen}
              closeSidebar={closeSidebar}
            />
          } />

          <Route path='/saved-movies' element={
            <SavedMovies
              movies={movies}
              openSidebarFunc={openSidebar}
              isSidebarOpen={isSidebarOpen}
              closeSidebar={closeSidebar}
            />
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
                />
              </ProtectedRoute>
            }
          />

          <Route path='/sign-up' element={
            <Register
              submitReg={onRegister}
              isErrMsg={isErrMsg}
            />
          } />

          <Route path='/sign-in' element={
            <Login
              submitLogin={onLogin}
            />
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
