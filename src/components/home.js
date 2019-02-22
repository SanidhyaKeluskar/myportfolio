import React from 'react';
import { NavLink} from 'react-router-dom';

const Home=()=>{
return (
  <div className="App">
        
      
  <section className="home-styling" style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8
      
    }} >
    <NavLink to="/about"> <img width="150" src="employee.svg" alt="description of "/>  </NavLink>
         
  </section>

  <section style={{
     backgroundColor: '#2274A5',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
    <NavLink to="/experience"> <img width="150" src="portfolio.svg" alt="description dfffof "/> </NavLink>
  
  </section>

  <section style={{
     backgroundColor: '#E9F1F7',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
  <NavLink to="/projects"> <img width="150" src="project-management.svg" alt="description dfffof "/></NavLink>
  
  </section>

  <section style={{
     backgroundColor: '#D0DB97',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
    <NavLink to="/contact"> <img width="150" src="letter.svg" alt="description dfffof "/></NavLink>

  </section>
</div>
);
};

export default Home;