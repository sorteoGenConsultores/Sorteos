import logo from './logo.svg';

import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';

import {
  Routes,
  Route
} from "react-router-dom";
import TestComponent from './components/TestComponent';
import { useAuth } from './context/AuthContext';
import { useEffect } from 'react';

function App() {
  const { user, usersimple, logout } = useAuth()

  useEffect(() => { console.log(user) }, [user])

  return (
    <div className="App">

      <Routes>
        <Route exact path='/' element={
          <header className="App-header">
            <button onClick={() => { logout() }}>
              LogOut
            </button>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path='/testing' element={<TestComponent />} />

        <Route exact path='*' element={<>
          Soy un error por desarrollar 🔧🛠
        </>} />
      </Routes>
    </div >
  );
}


export default App;
