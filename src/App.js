import React, { Component } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';


import Header from './common/Header'
import Home from './Home'
import createList from './createList'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#2196f3'
    },
    secondary:{
      main: '#f50057'
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router>
          <div>
            <Header />
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/lista' component={createList}/>
            </Switch>
          </div>
        
        </Router>
      </MuiThemeProvider>
        );
  }
}

export default App;
