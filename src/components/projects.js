import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';

class Projects extends Component{
    render(){
        return(
            <div style={{
                backgroundColor: '#E9F1F7',
                 
               }}>
                <section style={{
    
    paddingTop : 8,
    paddingBottom :8,

   paddingLeft : 8
     
   }}>
   <NavLink to="/"> <img width="25" src="house.svg" alt="description dfffof "/>  </NavLink>
 
            </section>
            

            <Grid className="demo-grid-1">
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600',margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >Inventory Management System</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                    Build a system wherein admin can track details of current inventory using dashboard<br></br> 
                    perform operations like update, delete, view item & track location of item.<br></br> 
                    Wrote an algorithm which predicts numbers of days remaining for the stock of every item to get over.<br></br>
                    Integrated Elastic Search for searching items throughout the inventory.<br></br>
                    </section>
                    <section>
                    <img width="40" src="icons8-java.svg" alt="description dfffof "/> 
                    <img width="40" src="javascript.svg" alt="description dfffof "/> 
                    <img width="40" src="react.svg" alt="description dfffof "/> 
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/Spring-Server" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >HairCutteryBot</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                    Devised a full stack AI bot for booking hair salon appointments which understand Natural Language text by using IBM Watson.<br></br>
                    Created backend server using Nodejs and MongoDB as database that stores customer & booking information.<br></br>
                    Containerized Node and MongoDB using Docker for easy deployment.
                    </section>
                    <section>
                    <img width="40" src="react.svg" alt="description dfffof "/> 
                    <img width="40" src="nodejs.svg" alt="description dfffof "/> 
                    <img width="40" src="mongodb.svg" alt="description dfffof "/> 
                    <img width="40" src="docker.svg" alt="description dfffof "/> 
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/NodeWatson" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >MoviePedia</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                    Engineered a full stack web application in which users can view information related to movies, give & view movie reviews.<br></br>
                    Created Restful backend API using NodeJs & MySQL and deployed on Heroku to serve data to front-end ReactJS application.<br></br>
                    Leveraged Redis to be used as cache to improve load times of recently searched queries.<br></br>

                    </section>
                    <section>
                    <img width="40" src="react.svg" alt="description dfffof "/> 
                    <img width="40" src="nodejs.svg" alt="description dfffof "/> 
                    <img width="40" src="mysql.svg" alt="description dfffof "/> 
                    
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/RestAPIMovieReview" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
            </Grid>


            </div>
        )
    }
}

export default Projects;