import React from 'react';
import { NavLink} from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';


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

 <Grid className="about-grid">
        <Cell col={6}><img style={{ paddingRight :8, paddingBottom :8}} width="250" src="me.jpg" alt="description dfffof " className="avatar-img"/></Cell>
        <Cell col={6}><h1 style={{ color : '#FFFFFF', fontSize : 35}} >Hi, i am Sanidhya Keluskar</h1> 
        <p style={{ color : '#FFFFFF', fontSize : 25}} >Graduate CS student at <img width="80" src="GWU.svg" alt="description dfffof "/> </p>
        <p style={{ color : '#FFFFFF', fontSize : 25}} >Full Stack Software Developer</p></Cell>
        
    </Grid>

    <Grid className="about-grid">
        <Cell col={1}><img width="40" src="icons8-java.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="javascript.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="react.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="android.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="ios.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="mysql.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="mongo.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="nodejs.svg" alt="description dfffof "/></Cell>
        <Cell col={1}><img width="40" src="spring.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="docker.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="aws.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="git.svg" alt="description dfffof "/> </Cell>
    </Grid>

    <Grid className="demo-grid-1">
        <Cell col={6}>
        <p style={{color : '#FFFFFF', fontSize : 20}}> Self-directed, highly motivated Computer Science graduate with ability to think creatively to solve technology related problems. Strong understanding of algorithms, Data Structures & Object oriented design. Passionate in designing and crafting efficient modern softwares, and learning new technologies and tools if need arises</p>
        </Cell>
        <Cell col={6}><p style={{color : '#FFFFFF', fontSize : 20}}> Problem solver with strong understanding of algorithms, Data Structures & Object oriented design . Proficient with java, javascript and SQL. Experience with building backend server using Spring boot & Nodejs and deploying on AWS, Heroku. Experience with frontend technologies like Reactjs, HTML,CSS. Comfortable developing mobile app both on IOS & android platform. I am good at troubleshooting and debugging</p></Cell>
    </Grid>



    

      
</div>
);
};

export default About;