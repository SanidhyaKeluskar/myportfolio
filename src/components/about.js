import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import {Grid, cell}  from 'react-mdl';

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
    <Grid className="about-grid">
        <cell col={12}>

        <img  width="250" src="me.jpg" alt="description dfffof " className="avatar-img"/>

        </cell>
    </Grid>
  <section>

  </section>

      
</div>
);
};

export default About;