import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage'
import Home from '../Home/Home';
import LibraryPage from '../Library/Library';
import WritersCornerPage from '../WritersCorner/WritersCorner';
import './App.css'


export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {user ? (
      <div>
          <NavBar user={user}/>
            <Routes>
              <Route path='/' element={<Home/>}></Route> 
              <Route path='/library' element={<LibraryPage user={user}/>}></Route> 
              <Route path='/writers_corner' element={<WritersCornerPage/>}></Route> 
            </Routes>
        </div>    
       ) : (
        <AuthPage setUser={setUser}/>
     )}
    </main>
  );
}