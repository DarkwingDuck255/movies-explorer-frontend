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
import {CurrentUserContext} from '../../utils/CurrentUserContext'
// import {register, login, checkToken} from '../../utils/MainApi.js';
import * as MainApi from '../../utils/MainApi.js';


function App() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      MainApi.checkToken(token)
      .then((res) => {
        setIsLoggedIn(true)
        if(res) {
          setIsLoggedIn(true)
          console.log(currentUser, isLoggedIn)
        }

      })
      .then(() => {
        console.log('статус логина', isLoggedIn)
        console.log('есть токен при загрузке страницы?', localStorage.getItem('token'))
      })
      .catch(err => {
        console.log(`нет токена, брат! ${err}`)
      })
    }
  }, [])

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      MainApi.getUserFromSrv(token)
      .then((res) => {
        setCurrentUser(res.user)
      })
      .then(()=> {
        console.log('текущий юзер?', currentUser)
      })
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
    })
  }
  
  function onLogin(data) {
    // const token = localStorage.getItem('token');
    MainApi.login(data)
    .then((res) => {
      localStorage.setItem(res.token, "token")
      setIsLoggedIn(true)
      navigate('/profile')
    })
    .then(() =>{
      console.log(isLoggedIn, 'залогинен?')
      console.log(localStorage.getItem("token"), 'есть token?')
    })
    .then(() => {
      console.log(isLoggedIn, 'залогинен после нажатия "Вход" ?')
    })
    // .then(() => {
    //   MainApi.getUserFromSrv(token)
    //   .then((res)=> {
    //     setCurrentUser(res.user)
    //   })
    // })

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
    console.log('Вышел?', isLoggedIn)

    console.log(localStorage.getItem('token'))
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className='App'>
        
        <Routes>

          <Route path='/' element={
            <Main/>
          }/>
          
          <Route path='/movies' element={
            <Movies
            movies={movies}
            />
          }/>

          <Route path='/saved-movies' element={
            <SavedMovies
              movies={movies}
            />
          }/>

          <Route 
            path='/profile'
            element={
              <ProtectedRoute loggedIn={isLoggedIn}>
                <Profile 
                  submitProfileEdit={onProfileEdit}
                  signOut={onSignOut}
                />
              </ProtectedRoute>
            }
          />

          <Route path='/sign-up' element={
              <Register
                submitReg={onRegister}
              />
          }/>

          <Route path='/sign-in' element={
            <Login
              submitLogin={onLogin}
            />
          }/>

          <Route path='*' element={
            <NotFound/>
          }/>

        </Routes>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
