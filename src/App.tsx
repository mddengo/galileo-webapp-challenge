import React from 'react';
import './App.css';
import {ProviderPortal} from './Provider';
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome.</h1>
      </header>
      <Container maxWidth="lg" className="App-container">
        <ProviderPortal />
      </Container>
    </div>
  );
}

export default App;
