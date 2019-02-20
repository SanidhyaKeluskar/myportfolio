import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import {Grid, Cell}  from 'react-mdl';

const About=()=>{
return (
  <div className="text-right" style={{
    backgroundColor: '#B33951',
     
   }}>

      <section style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <img width="25" src="house.svg" alt="description dfffof "/>  </NavLink>
  
  </section>

  <div class="row" style={{
     backgroundColor: '#B33951'
    }}>
  <div class="column"> <img style={{ float: 'right' , paddingRight :8, paddingBottom :8}} width="250" src="me.jpg" alt="description dfffof " className="avatar-img"/></div>
  <div class="column"> <h1 style={{ color : '#FFFFFF', verticalAlign: 'baseline'}} >Hi, i am Sanidhya Keluskar</h1><h2 style={{ color : '#FFFFFF'}} >Software Engineer & Full Stack Developer</h2></div>
</div >
<div className="technologies-known" style={{
     backgroundColor: '#B33951'
    }}>
<img width="40" src="icons8-java.svg" alt="description dfffof "/> 
<img width="40" src="javascript.svg" alt="description dfffof "/> 
<img width="40" src="react.svg" alt="description dfffof "/> 
<img width="40" src="android.svg" alt="description dfffof "/> 
<img width="40" src="ios.svg" alt="description dfffof "/> 
<img width="40" src="mysql.svg" alt="description dfffof "/> 
<img width="40" src="mongo.svg" alt="description dfffof "/> 
<img width="40" src="nodejs.svg" alt="description dfffof "/> 
<img width="40" src="spring.svg" alt="description dfffof "/> 
<img width="40" src="docker.svg" alt="description dfffof "/> 
<img width="40" src="aws.svg" alt="description dfffof "/> 
</div>

<div style={{
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }} >

    <p style={{
     alignContent: 'center',
     border: '1 solid #FFFFFF',
     color : '#FFFFFF'
    }}> "Self-directed, highly motivated Computer Science graduate with ability to think creatively to solve technology related problems. Strong understanding of algorithms, Data Structures & Object oriented design. Passionate in designing and crafting efficient modern softwares, and learning new technologies and tools if need arises"</p>

    <p style={{
     alignContent: 'center',
     color : '#FFFFFF'
    }}> "Problem solver with strong understanding of algorithms, Data Structures & Object oriented design . Proficient with java, javascript and SQL. Experience with building backend server using Spring boot & Nodejs and deploying on AWS, Heroku. Experience with frontend technologies like Reactjs, HTML,CSS. Comfortable developing mobile app both on IOS & android platform. I am good at troubleshooting and debugging"</p>


</div>

    

      
</div>
);
};

export default About;