import './App.css';
import React from 'react';
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies';
import { Route, Routes } from "react-router-dom";
import Main from '../Main/Main';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';


function App() {
  return (
    <div className='App'>
      

      <Routes>

        <Route path='/' element={<Main/>}/>
        
        <Route path='/movies' element={
          <Movies/>
        }/>

        <Route path='/saved-movies' element={
          <SavedMovies/>
        }/>

        <Route path='/profile' element={
          <Profile/>
        }/>

        <Route path='/sign-up' element={
          <Register/>
        }/>

        <Route path='/sign-in' element={
          <Login/>
        }/>

        <Route path='*' element={
          <NotFound/>
        }/>

      </Routes>
    </div>
    
  );
}

export default App;