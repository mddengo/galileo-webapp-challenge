/**
 * App container
 */
import React from 'react';
import './App.css';
import { ProviderPortal } from './provider/Provider';
import { Container, AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Menu, AccountCircle } from '@material-ui/icons';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      backgroundColor: '#0f1430',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#ffd040',
    },
    accountIcon: {
      color: '#ffd040',
    },
    grow: {
      flexGrow: 1,
    },
    h1: {
      fontFamily: 'Libre Baskerville',
      margin: 10,
    }
  }),
);

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <div className={classes.grow} />
          <IconButton edge="end" color="inherit" aria-label="account" className={classes.accountIcon}>
            <AccountCircle />
          </IconButton>
        </Toolbar>
      </AppBar>
      <header className="App-header">
        <Typography variant="h1" className={classes.h1}>
          Welcome.
        </Typography>
      </header>
      <Container maxWidth="lg" className="App-container">
        <ProviderPortal data-testid="provider-portal" />
      </Container>
    </div>
  );
}

export default App;
