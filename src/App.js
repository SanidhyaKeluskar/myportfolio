import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
      
        <section style={{
           backgroundColor: '#B33951',
           paddingTop : 8,
           paddingBottom :8
            
          }}>
              <img width="150" src="employee.svg" alt="description of "/>   
        </section>

        <section style={{
           backgroundColor: '#2274A5',
           paddingTop : 8,
           paddingBottom :8
            
          }}>
        <img width="150" src="portfolio.svg" alt="description dfffof "/>
        </section>

        <section style={{
           backgroundColor: '#E9F1F7',
           paddingTop : 8,
           paddingBottom :8
            
          }}>
        <img width="150" src="project-management.svg" alt="description ofgggg "/>
        
        </section>

        <section style={{
           backgroundColor: '#D0DB97',
           paddingTop : 8,
           paddingBottom :8
            
          }}>
        <img width="150" src="letter.svg" alt="description of rrimage"/>
        </section>
      </div>
    );
  }
}

export default App;
