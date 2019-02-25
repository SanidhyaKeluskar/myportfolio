import React from 'react';
import { NavLink} from 'react-router-dom';
import { Grid, Cell} from 'react-mdl';
import Footer from './footer';



const About=()=>{
return (
  <div className="text-right" style={{
    backgroundColor: '#B33951',  
   
   }}>

   

      <div className="header-for-all" style={{
     backgroundColor: '#B33951',
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <i class="fas fa-home" aria-hidden="true"/>  </NavLink>
    
  
  </div>
  
<div style={{
        minHeight: '90vh' ,
      
        }}>
 <Grid className="about-grid">
        <Cell col={6}><img style={{ paddingRight :8, paddingBottom :8}} width="225" src="me.jpg" alt="description dfffof " className="avatar-img"/></Cell>
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
        <Cell col={1}><i class="fab fa-node"/></Cell>
        <Cell col={1}><img width="40" src="spring.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><img width="40" src="docker.svg" alt="description dfffof "/> </Cell>
        <Cell col={1}><i class="fab fa-aws"/> </Cell>
        <Cell col={1}><img width="40" src="git.svg" alt="description dfffof "/> </Cell>
    </Grid>

    <Grid className="demo-grid-1">
        <Cell col={6}>
        <p style={{color : '#FFFFFF', fontSize : 22, fontFamily: 'Dosis', lineHeight:1.5}}> I am a self-directed, highly motivated Computer Science graduate with ability to think creatively to solve technology related problems. I believe i have strong understanding of algorithms, Data Structures & Object oriented design. I am Passionate about designing and crafting efficient modern softwares, and learning new technologies and tools if need arises. I am a problem solver and love to take on new challenges.</p>
        </Cell>
        <Cell col={6}><p style={{color : '#FFFFFF', fontSize : 22,fontFamily: 'Dosis',lineHeight:1.5}}>I have over 3 years of experience in Software Development having built multiple projects for learning purpose and during my internships. 
        I am proficient with Java, Javascript and SQL.
        I am skilled at Frontend development, mobile development and backend development. 
        Frameworks like React, Redux, Bootstrap, Nodejs, ExpressJs, Spring Boot, Android & IOS are under my belt. 
        I have experience with unit testing. I also believe i am good at debugging & troubleshooting.
        </p>
        <p style={{color : '#FFFFFF', fontSize : 22,fontFamily: 'Dosis'}}>Here is my <a style={{color : '#FFFF00', fontSize : 25,fontFamily: 'Dosis'}} href="https://drive.google.com/file/d/1D6eaoMioq7PDLMYIdgsgXsuGNXCs1eLu/view?usp=sharing" rel="noopener noreferrer" target="_blank">
                    RESUME
                    </a> </p>
        </Cell>
    </Grid>
    
    </div>
    <Footer />

    
   
      
</div>
);
};

export default About;