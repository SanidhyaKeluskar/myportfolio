import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';
import Footer from './footer';

class Experience extends Component{

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    selectcompany(){
        if(this.state.activeTab === 0){
            return(
                <div>

                    <Grid className="demo-grid-1">
        <Cell col={6}><p style={{color : '#FFFFFF', fontSize:'25px', paddingLeft : 8}}>Bankey LLC (1st June 2018 - 31st August 2018)</p>
        <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>Software Engineering Intern</p>
        <img width="200px" src="washingdc.png" alt="description dfffof " className="avatar2-img"/>
        
        </Cell>
        <Cell col={6}>
        <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>
                    Participated in complete Software Development Life Cycle (SDLC) of Bankey's Android Application for proper analysis, development, testing, deployment and enhancement of code. <br></br>
Responsible for development of fragments & modules for send money & receive money flow.<br></br>
Implemented find nearest key (Bankey's ATM entity) functionality which expedited 'request Money from Key' process by 30%.<br></br>
Integrated several backend APIs, tested the application on multiple android targets and debugged issues that were found.<br></br>
Performed research to implement Blockchain on Bankey's existing Model to improve security, reliability & cost of transactions. <br></br>
Worked in scrum environment and helped company publish App on Google Play Store.

                    </p>
        </Cell>
        
        </Grid>

    <div className="backgroud-of-show-work">
        <p style={{color : '#253031', fontSize:'25px', textAlign : 'center', paddingTop : '10px'}}>
            Snapshots of my work at Bankey
        </p>
        <Grid className="grid-to-show-work">
        <Cell col={4} className="grid-to-show-work"><img width="200px" src="bankey1.png" alt="description dfffof "/> </Cell>
        <Cell col={4} className="grid-to-show-work"><img width="200px" src="bankey 2.png" alt="description dfffof "/></Cell>
        <Cell col={4}className="grid-to-show-work"><img width="200px" src="bankey3.png" alt="description dfffof "/></Cell>
    </Grid>
        
    </div>    
                    
    

    <Grid className="demo-grid-1">
        <Cell col={12}>
        <p style={{color : '#FFFFFF', fontSize:'25px', paddingLeft : 8}}>
        Testimonial
    </p>
    <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>
    "Sanidhya is great talent who is passionate about emerging technology and software development. I worked with him for 3 months. He is a true team player and he makes sure that tasks are delivered on time. Sanidhya is a valuable resource that you should keep in your team"<br></br>
 -Moataz Alobaid(Founder of Bankey LLC)
    </p>
        </Cell>
    </Grid>

    <Footer />
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div style={{minHeight: '100vh'}}>
                
                <Grid className="demo-grid-1">
        <Cell col={6}><p style={{color : '#FFFFFF', fontSize:'25px', paddingLeft : 8}}>Trivia Software Pvt LTD (1st Jan 2016- 30th June 2016)</p>
        <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>Software Engineering Intern</p>
        <img width="200px" src="mumbai.png" alt="description dfffof " className="avatar2-img"/>
        
        </Cell>
        <Cell col={6}>
        <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>
Worked on a desktop application. Performed automation by writing SQL trigger which reduced client's data entry task by 70%.<br></br>
Designed & deployed complex SQL queries for creation of new Reports. Modified stored procedures as per client's requirement.<br></br>
Performed unit and Regression testing with production data and match existing manual system.<br></br>
Contributed in group discussions/meetings for valuable changes, resolved defects and learned Agile development process.


                    </p>
        </Cell>
        
        </Grid>
                
        
                    
                </div>
            )

        }
    }
    

    render(){
        return (
            <div className="demo-tabs" style={{
                backgroundColor: '#2274A5',
                 
               }}>
                <div className="header-for-all" style={{
     backgroundColor: '#2274A5',
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <i class="fas fa-home" aria-hidden="true"/>  </NavLink>
    
  
  </div>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={
                        {
                            color : '#FFFFFF'
                        }
                    }>Bankey</Tab>
                    <Tab style={{color : '#FFFFFF'}}>Trivia Softwares</Tab>
                 
                </Tabs>
                <section>
                    {this.selectcompany()}
                </section>

    
    </div>
        )

    }
}

export default Experience;