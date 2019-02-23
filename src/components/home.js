import React from 'react';
import { NavLink} from 'react-router-dom';
import Footer from './footer';
import { Grid, Cell} from 'react-mdl';


const Home=()=>{
return (
  <div className="App">
        
    

   <section className="home-styling" style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8
      
    }} >
     <NavLink to="/about"> <i class="fas fa-smile-beam"/> </NavLink> 
  </section>


  <section className="home-styling" style={{
     backgroundColor: '#2274A5',
     paddingTop : 8,
     paddingBottom :8
      
    }}>

    
    <NavLink to="/experience"> <i class="fas fa-laptop-code"/></NavLink>
  
  </section>

  <section className="home-styling-three" style={{
     backgroundColor: '#E9F1F7',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
    <NavLink to="/projects"> <i class="fas fa-code-branch"/></NavLink>
  
  </section>

  <section className="home-styling-three" style={{
     backgroundColor: '#D0DB97',
     paddingTop : 8,
     paddingBottom :8
      
    }}>
  
    <NavLink to="/contact"> <i class="far fa-envelope"/></NavLink>

  </section>
  <Footer />
</div>
);
};

export default Home;