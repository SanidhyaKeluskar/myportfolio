import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./footer";
import {
  Grid,
  Cell,
  Card,
  CardText,
  CardTitle,
  CardActions,
  Button
} from "react-mdl";

class Projects extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#E9F1F7";
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "#E9F1F7"
        }}
        className="fade-in"
      >
        <div
          className="header-black"
          style={{
            backgroundColor: "#E9F1F7",
            paddingTop: 8,
            paddingBottom: 8,

            paddingLeft: 8
          }}
        >
          <NavLink to="/">
            {" "}
            <i class="fas fa-home" aria-hidden="true" />{" "}
          </NavLink>
        </div>

        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>Cinephile Network</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Engineered a full stack social network web app for cinephiles
                  to connect and discuss movies. Cinephiles can create profiles,
                  recommend movies, review movies & participate in discussion by
                  commenting or liking on other cinephile's post.
                  <br />
                  Created Backend API's with protected routes using Nodejs,
                  Express, JWT and Passport.
                  <br />
                  Developed front end in ReactJs and performed state management
                  using Redux.
                  <br />
                </section>
                <section>
                  <img width="40" src="react.svg" alt="description dfffof " />
                  <i
                    class="fab fa-node"
                    style={{ color: "black", fontSize: "2.5em" }}
                  />
                  <img width="40" src="mongo.svg" alt="description dfffof " />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/cinephilenetwork"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>Inventory Management System</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Build a system wherein admin can track details of inventory
                  using dashboard
                  <br />
                  Admin can perform operations like update, delete, view item &
                  track location of item.
                  <br />
                  Wrote an algorithm which predicts numbers of days remaining
                  for the stock of every item to get over.
                  <br />
                  Integrated Elastic Search for searching items throughout the
                  inventory.
                  <br />
                </section>
                <section>
                  <img width="40" src="react.svg" alt="description dfffof " />
                  <img width="40" src="redux.svg" alt="description dfffof " />
                  <img width="40" src="spring.svg" alt="description dfffof " />
                  <img
                    width="40"
                    src="elasticsearch.svg"
                    alt="description dfffof "
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/Spring-Server"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>HairCutteryBot</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Devised a full stack AI bot for booking hair salon
                  appointments which understand Natural Language text by using
                  IBM Watson.
                  <br />
                  Created backend server using Nodejs and MongoDB as database
                  that stores customer & booking information.
                  <br />
                  Containerized Node and MongoDB using Docker for easy
                  deployment.
                </section>
                <section>
                  <img width="40" src="react.svg" alt="description dfffof " />
                  <i
                    class="fab fa-node"
                    style={{ color: "black", fontSize: "2.5em" }}
                  />
                  <img width="40" src="mongo.svg" alt="description dfffof " />
                  <img width="40" src="docker.svg" alt="description dfffof " />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/NodeWatson"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
        </Grid>

        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>Metro Explorer</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Developed a beautiful IOS app that assists travelers to
                  explore landmarks & restaurants near Washington DC.
                  <br />
                  Exploiting the Yelp & WMATA API the app enables users to find,
                  get direction, favorite & share with friends a landmark.
                  <br />
                  Implemented a feature which allows user to take picture of a
                  restaurant & the app will show ratings. <br />
                  Performed Unit Testing.
                </section>
                <section>
                  <img width="40" src="ios.svg" alt="description dfffof " />
                  <img width="40" src="swift.svg" alt="description dfffof " />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/metrofinder"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>Petify</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Created an app that helps users find pets for adoption. User
                  can find pets based on user's location, pet's type, breed,
                  age, etc.
                  <br />
                  Implemented voice search feature for finding pets, just speak
                  about characteristics of pet and the app will show customized
                  result.
                  <br />
                  Used Firebase Database to store information of favorite pets.
                  <br /> Implemented Dual language support (English & Hindi).
                </section>
                <section>
                  <img width="40" src="android.svg" alt="description dfffof " />
                  <img
                    width="30"
                    src="kotlin.svg"
                    alt="description dfffof "
                    style={{ padding: "5px" }}
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/petify"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>College Website</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Led a team of 3 to develop a website which has features such
                  as Online assignment submission & Buy/sell used product
                  portal.
                  <br />
                  Implemented 'Buddy System' wherein a Senior is assigned to a
                  Freshman as mentor using K-mean clustering algorithm. <br />
                  Maintained backend using MS SQL server for managing user data
                  and exercising user authentication.
                </section>
                <section>
                  <img width="40" src="php.svg" alt="description dfffof " />
                  <img
                    width="40"
                    src="sqlserver.svg"
                    alt="description dfffof "
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/CollegeWebsite"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
        </Grid>

        <Grid className="demo-grid-1">
          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>WonderQuiz</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Designed & developed a quiz app based on seven Natural Wonders
                  of the World. <br />
                  Implemented Scoreboard for score at the end of Quiz <br />
                  Also implemented a Progress Bar for answering each question.
                </section>
                <section>
                  <img width="40" src="android.svg" alt="description dfffof " />
                  <img
                    width="40"
                    src="icons8-java.svg"
                    alt="description dfffof "
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/WonderQuiz"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>ChatApp</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Built a Chat app in which messages are synced across logged-in
                  devices in realtime using Firebase's Realtime Database.
                  <br />
                  Used Firebase Auth to implement user authentication. <br />
                  Performed dependency injection using Dagger 2 library.
                </section>
                <section>
                  <img width="40" src="android.svg" alt="description dfffof " />
                  <img
                    width="40"
                    src="icons8-java.svg"
                    alt="description dfffof "
                  />
                  <img
                    width="40"
                    src="firebase.svg"
                    alt="description dfffof "
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/ChatApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>

          <Cell col={4}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>WeatherApp</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Designed & developed a weather app which shows weather data of
                  user's current location using phone's GPS.
                  <br />
                  Used OpenWeatherMap API to fetch weather data.
                </section>
                <section>
                  <img width="40" src="android.svg" alt="description dfffof " />
                  <img
                    width="40"
                    src="icons8-java.svg"
                    alt="description dfffof "
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/WeatherApp"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
        </Grid>

        <Grid className="demo-grid-1">
          <Cell col={12}>
            <Card
              shadow={5}
              style={{
                minWidth: "450",
                height: "600",
                margin: "auto",
                justifyContent: "center"
              }}
            >
              <CardTitle>Portfolio Website</CardTitle>
              <CardText className="technologies-known">
                <section>
                  Designed and developed my portfolio website.
                  <br /> Built the website using ReactJS, React MDL,
                  Reacter-router and deployed the website on AWS
                </section>
                <section>
                  <img width="40" src="react.svg" alt="description dfffof " />
                  <i
                    class="fab fa-aws"
                    style={{ color: "black", fontSize: "2.5em" }}
                  />
                </section>
              </CardText>

              <CardActions border>
                <a
                  href="https://github.com/SanidhyaKeluskar/myportfolio"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Button colored style={{ alignContent: "center" }}>
                    GitHub
                  </Button>
                </a>
              </CardActions>
            </Card>
          </Cell>
        </Grid>

        <Footer />
      </div>
    );
  }
}

export default Projects;
