import React from 'react';
import Header from "./components/Header";
import CafePage from "./components/CafePage";
import NavBar from "./components/NavBar";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <CafePage/>
    </div>
  );
}

export default App;
