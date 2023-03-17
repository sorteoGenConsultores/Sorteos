import logo from './logo.svg';

import './App.css';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Register from './components/register/Register';

import {
  Routes,
  Route
  // Link,
  // useNavigate,
  // useLocation,
  // Navigate,
  // Outlet,
} from "react-router-dom";
import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <Routes>
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
