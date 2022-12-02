import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage'
import Home from '../../components/Home/Home';
import './App.css'


export default function App() {
  const [user, setUser] = useState(getUser())

  return (
    <main className="App">
      { user ?
        <>
          <Routes>
            <Route path='/home' element={<Home />} user={user} setUser={setUser}></Route> 
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}