import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Button2, Button3} from './Components/Button.js';

function App() {
  return (
    <div className="App">
      <Button/><Button2/><Button3/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          You should die.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=qP5Sey7mVPk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe sucks more eggs than a yolk remover xD
        </a>
      </header>
    </div>
  );
}

export default App;
