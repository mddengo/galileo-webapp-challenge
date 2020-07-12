import React from 'react';
import './App.css';
import {ProviderPortal} from './Provider';
import { Container, Card } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome.</h1>
      </header>
      <Container maxWidth="md">
        <Card variant="outlined">
          <ProviderPortal />
        </Card>
      </Container>
    </div>
  );
}

export default App;
