import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ProviderPortal} from './Provider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome.</h1>
      </header>
      <ProviderPortal />
    </div>
  );
}

export default App;
