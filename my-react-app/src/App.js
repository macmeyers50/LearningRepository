import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Button2, Button3} from './Components/Button.js';
import MyTable from './Components/MyTable.js';
import MyForm from './Components/MyForm.js';
function App() {
  return (

      <header className="App-header">
      <Button/><Button2/><Button3/>
      <MyForm/>
      <MyTable/>
      
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=qP5Sey7mVPk"
          target="_blank"
          rel="noopener noreferrer"
        >
          Joe sucks more eggs than a yolk remover xD
        </a>
      </header>

  );
}

export default App;
