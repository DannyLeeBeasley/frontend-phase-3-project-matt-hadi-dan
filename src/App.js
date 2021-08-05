import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from "./components/Header";
import CafePage from "./components/CafePage";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <NavBar/>
        <CafePage/>
      </Router>
    </div>
  );
}

export default App;
