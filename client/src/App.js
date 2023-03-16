import logo from './logo.svg';
import './App.css';

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
        <Route exact path='/' element={
          <header className="App-header">
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
        <Route exact path='/testing' element={<TestComponent />} />

        <Route exact path='*' element={<>
          Soy un error por desarrollar 🔧🛠
        </>} />
      </Routes>
    </div>
  );
}


export default App;
