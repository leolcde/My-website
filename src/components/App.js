import React from 'react';
import Navbar from './Navbar';
import logo from '../content/epitech.png';
import './App.css';

function App() {
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Navbar />
      <header className="App-header">
        <h1 className="App-title">Personal Project In React</h1>
        <p className="App-minititle">
          Welcome to <code>Léo's</code> website.
        </p>
        <img className="Logo" src={logo} alt="Logo" />
        <p className="Text">Qui suis-je ?</p>
      </header>
    </div>
  );
}

export default App;
