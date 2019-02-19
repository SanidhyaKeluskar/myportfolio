import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <Route path="/" component={Home} exact/>
        <Route path="/about" component={About}/>
      </Switch>
        
      </BrowserRouter>
    );
  }
}

export default App;
