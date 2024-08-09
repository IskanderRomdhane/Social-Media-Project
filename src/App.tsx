import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Login} from "./pages/login"
import {Main} from "./pages/main"
import {Navbar} from "./components/Navbar"
import {BrowserRouter as Router , Route , Routes, Link} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path='/'element={<Main />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
