import React from 'react';
import { Route, Switch, BrowserRouter, Redirect, Link} from "react-router-dom";
import logo from '../images/logo.png';
import './App.css';
import Amplify from "aws-amplify";

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

import HomeComponent from "./Home/index";

const theme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#0d47a1",
    }
  }
})

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));


function App() {
  const classes = useStyles();
  // Amplify.configure({
  //   Auth: {
  //     identityPoolId: '',
  //     region: 'ap-northeast-1',
  //     userPoolId: 'ap-northeast-1_[ID]',
  //     userPoolWebClientId: '[ID]',
  //     authenticationFlowType: 'USER_PASSWORD_AUTH',
  //   },
  // })


  return (
    <div>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
            <AppBar position="fixed" color="default">
              <Toolbar variant="dense">
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
                <img src={logo} id="logo"/>
              </Toolbar>
            </AppBar>
          <div>
            <Switch>
              <Route exact path="/" component={HomeComponent}/>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
