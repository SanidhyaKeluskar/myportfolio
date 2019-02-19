import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route , Switch} from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Route render={({location})=>(

<TransitionGroup>
<CSSTransition

key={location.key}
  
          timeout={500}
          classNames="fade"
        >
<Switch location={location}>
<Route path="/" component={Home} exact/>
  <Route path="/about" component={About}/>
</Switch>
</CSSTransition>
</TransitionGroup>

      )}/>
      
        
      </BrowserRouter>
    );
  }
}

export default App;
