import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import { Tabs, Tab, Grid, Cell} from 'react-mdl';

class Experience extends Component{

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    selectcompany(){
        if(this.state.activeTab === 0){
            return(
                <div>
                    <h2 style={{color : '#FFFFFF', fontSize:'25px', paddingLeft : 8}}>Bankey LLC (1st June 2018 - 31st August 2018)</h2>
                    <p style={{color : '#FFFFFF', fontSize:'18px', paddingLeft : 8}}>
                    Participated in complete Software Development Life Cycle (SDLC) of Bankey's Android Application for proper analysis, development, testing, deployment and enhancement of code. <br></br>
Responsible for development of fragments & modules for send money & receive money flow.<br></br>
Implemented find nearest key (Bankey's ATM entity) functionality which expedited 'request Money from Key' process by 30%.<br></br>
Integrated several backend APIs, tested the application on multiple android targets and debugged issues that were found.<br></br>
Performed research to implement Blockchain on Bankey's existing Model to improve security, reliability & cost of transactions. <br></br>
Worked in scrum environment and helped company publish App on Google Play Store.

                    </p>
    <Grid className="demo-grid-1">
        <Cell col={4}><img width="200px" src="bankey1.png" alt="description dfffof "/> </Cell>
        <Cell col={4}><img width="200px" src="bankey 2.png" alt="description dfffof "/></Cell>
        <Cell col={4}><img width="200px" src="bankey3.png" alt="description dfffof "/></Cell>
    </Grid>
                </div>
            )
        }
        else if(this.state.activeTab === 1){
            return(
                <div>
                    <h2 style={{color : '#FFFFFF', fontSize:'25px', paddingLeft : 8}}>Trivia Software Pvt LTD (1st Jan 2016- 30th June 2016)</h2>
            </div>
            )

        }
    }
    

    render(){
        return (
            <div className="demo-tabs" style={{
                backgroundColor: '#2274A5',
                 
               }}>
                <section style={{
    
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <img width="25" src="house.svg" alt="description dfffof "/>  </NavLink>
  
  </section>
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