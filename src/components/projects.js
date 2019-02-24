import React, {Component} from 'react';
import { NavLink} from 'react-router-dom';
import Footer from './footer';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button} from 'react-mdl';

class Projects extends Component{
    render(){
        return(
            <div style={{
                backgroundColor: '#E9F1F7',
                 
               }}>
                <div className="header-black" style={{
     backgroundColor: '#E9F1F7',
     paddingTop : 8,
     paddingBottom :8,

    paddingLeft : 8
      
    }}>
    <NavLink to="/"> <i class="fas fa-home" aria-hidden="true"/>  </NavLink>
    
  
  </div>
            

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





            <Grid className="demo-grid-1">
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600',margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >Metro Explorer</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                        Developed a beautiful IOS app that assists travelers to explore landmarks & restaurants near Washington DC.<br></br>
                        Exploiting the Yelp & WMATA API the app enables users to find, get direction, favorite & share with friends a landmark.<br></br>
                        Implemented a feature which allows user to take picture of a restaurant & the app will show ratings. <br></br>Performed Unit Testing. 

                    </section>
                    <section>
                    <img width="40" src="ios.svg" alt="description dfffof "/> 
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/metrofinder" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >Petify</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                            Created an app that helps users find pets for adoption. User can find pets based on user's location, pet's type, breed, age, etc.<br></br>
                            Implemented voice search feature for finding pets, just speak about characteristics of pet and the app will show customized result.<br></br>
                            Used Firebase Database to store information of favorite pets.<br></br> Implemented Dual language support (English & Hindi).

                    </section>
                    <section>
                    <img width="40" src="android.svg" alt="description dfffof "/> 
                    
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/petify" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >College Website</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                            Led a team of 3 to develop a website which has features such as Online assignment submission & Buy/sell used product portal.<br></br>
                            Implemented 'Buddy System' wherein a Senior is assigned to a Freshman as mentor using K-mean clustering algorithm. <br></br>
                            Maintained backend using MS SQL server for managing user data and exercising user authentication.
                    </section>
                    <section>
                    <img width="40" src="react.svg" alt="description dfffof "/> 
                    <img width="40" src="nodejs.svg" alt="description dfffof "/> 
                    <img width="40" src="mysql.svg" alt="description dfffof "/> 
                    
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/CollegeWebsite" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
            </Grid>






            <Grid className="demo-grid-1">
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600',margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >ChatApp</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                            Built a Chat app in which messages are synced across logged-in devices in realtime using Firebase's Realtime Database.<br></br>
                            Used Firebase Auth to implement user authentication. <br></br>Performed dependency injection using Dagger 2 library.


                    </section>
                    <section>
                    <img width="40" src="android.svg" alt="description dfffof "/> 
                    <img width="40" src="icons8-java.svg" alt="description dfffof "/> 
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/ChatApp" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', height: '600', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >WonderQuiz</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
Designed & developed a quiz app based on seven Natural Wonders of the World. <br></br>
Implemented Scoreboard for score at the end of Quiz <br></br>Also implemented a Progress Bar for answering each question.


                    </section>
                    <section>
                    <img width="40" src="android.svg" alt="description dfffof "/> 
                    <img width="40" src="icons8-java.svg" alt="description dfffof "/> 
                    
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/WonderQuiz" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
                <Cell col={4}>
                    <Card  shadow={5} style={{minWidth: '450', margin: 'auto', justifyContent: 'center'}}>
                    <CardTitle >WeatherApp</CardTitle>
                    <CardText className="technologies-known"  >
                    <section>
                        Designed & developed a weather app which shows weather data of user's current location using phone's GPS.<br></br>
                        Used OpenWeatherMap API to fetch weather data. 

                    </section>
                    <section>
                    <img width="40" src="android.svg" alt="description dfffof "/> 
                    <img width="40" src="icons8-java.svg" alt="description dfffof "/> 
                    
                    </section>
                    
                    </CardText>
                    
                    <CardActions border>
                    <a href="https://github.com/SanidhyaKeluskar/WeatherApp" rel="noopener noreferrer" target="_blank">
                    <Button colored style={{alignContent: 'center'} } >GitHub</Button>
                    </a>
                        
                    </CardActions>
                    </Card>
                </Cell>
            </Grid>

            <Footer />
            </div>
        )
    }
}

export default Projects;