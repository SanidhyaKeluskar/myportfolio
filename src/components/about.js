import React, { Component } from 'react';
import { NavLink} from 'react-router-dom'

const About=()=>{
return (
  <div className="text-right">

      <section style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <img width="25" src="house.svg" alt="description dfffof "/>  </NavLink>
  
  </section>

      
</div>
);
};

export default About;