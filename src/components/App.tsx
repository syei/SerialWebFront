import React from 'react';
import { Route, Switch, BrowserRouter, Redirect, Link} from "react-router-dom";
import logo from '../images/logo.png';
import './App.css';

import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import HomeComponent from "./Home/index";

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

  return (
    <div>
      <BrowserRouter>
          <AppBar position="fixed" color="default">
            <Toolbar variant="dense">
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <img src={logo} id="logo"/>
              {/* <Typography variant="h6" color="inherit">
                Photos
              </Typography> */}
            </Toolbar>
          </AppBar>

        {/* <div className="column-1">
            イベント情報
          </div> */}


        {/*  */}
        <div>
          <Switch>
            <Route exact path="/" component={HomeComponent}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
