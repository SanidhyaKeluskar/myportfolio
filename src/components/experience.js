import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Tabs, Tab, Grid, Cell } from "react-mdl";
import Footer from "./footer";
import ScrollReveal from "scrollreveal";

class Experience extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#2274A5";
    ScrollReveal().reveal(".experience-company-name", {
      duration: 2000,
      origin: "bottom",
      distance: "50px"
    });
    ScrollReveal().reveal(".experience-company-description", {
      duration: 2000,
      origin: "right",
      distance: "100px"
    });
    ScrollReveal().reveal(".experience-company-testimonial", {
      duration: 2000,
      origin: "bottom",
      distance: "10px"
    });
    ScrollReveal().reveal(".backgroud-of-show-work", {
      duration: 2000,
      origin: "bottom",
      distance: "100px"
    });
  }

  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  selectcompany() {
    if (this.state.activeTab === 0) {
      return (
        <div>
          <Grid className="experience-company-name">
            <Cell col={6}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  paddingLeft: 8,
                  fontFamily: "ZCOOL QingKe HuangYou"
                }}
                className="experience-company-name"
              >
                Bankey LLC (1st June 2018 - 31st August 2018)
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  paddingLeft: 8,
                  fontFamily: "ZCOOL QingKe HuangYou"
                }}
              >
                Software Engineering Intern
              </p>
              <img
                width="200px"
                src="washingdc.png"
                alt="description dfffof "
                className="avatar2-img"
              />
            </Cell>
            <Cell col={6}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "19px",
                  paddingLeft: 8,
                  fontFamily: "Dosis",
                  lineHeight: 1.5
                }}
                className="experience-company-description"
              >
                Contributed to Mobile Application Development Lifecycle for
                development, testing, deployment and enhancement of code <br />
                Worked in a team to develop 'send & request money' system by
                integrating Mango Pay.
                <br />
                Added functionality which expedited user's 'request money'
                process by 20%.
                <br />
                Fixed bugs, integrated several backend APIs & tested with Junit
                and Expresso.
                <br />
                Performed research to implement Blockchain on Bankey's existing
                Model to improve security, reliability & cost of transactions.{" "}
                <br />
                Worked in scrum environment and helped company publish App on
                Google Play Store.
              </p>
            </Cell>
          </Grid>

          <div className="backgroud-of-show-work">
            <p
              style={{
                color: "#253031",
                fontSize: "25px",
                textAlign: "center",
                paddingTop: "10px",
                fontFamily: "ZCOOL QingKe HuangYou"
              }}
            >
              Snapshots of my work at Bankey
            </p>
            <Grid className="grid-to-show-work">
              <Cell col={4} className="grid-to-show-work">
                <img
                  width="200px"
                  src="bankey1.png"
                  alt="description dfffof "
                />{" "}
              </Cell>
              <Cell col={4} className="grid-to-show-work">
                <img
                  width="200px"
                  src="bankey 2.png"
                  alt="description dfffof "
                />
              </Cell>
              <Cell col={4} className="grid-to-show-work">
                <img
                  width="200px"
                  src="bankey3.png"
                  alt="description dfffof "
                />
              </Cell>
            </Grid>
          </div>

          <Grid className="demo-grid-1">
            <Cell col={12}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  paddingLeft: 8,
                  fontFamily: "ZCOOL QingKe HuangYou"
                }}
              >
                Testimonial
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "19px",
                  paddingLeft: 8,
                  fontFamily: "Dosis",
                  lineHeight: 1.5
                }}
                className="experience-company-testimonial"
              >
                "Sanidhya is great talent who is passionate about emerging
                technology and software development. I worked with him for 3
                months. He is a true team player and he makes sure that tasks
                are delivered on time. Sanidhya is a valuable resource that you
                should keep in your team"
                <br />
                -Moataz Alobaid(Founder of Bankey LLC)
              </p>
            </Cell>
          </Grid>

          <Footer />
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div style={{}}>
          <Grid className="demo-grid-1" style={{ minHeight: "90vh" }}>
            <Cell col={6}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "25px",
                  paddingLeft: 8,
                  fontFamily: "ZCOOL QingKe HuangYou"
                }}
              >
                Trivia Software Pvt LTD (1st Jan 2016- 30th June 2016)
              </p>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "22px",
                  paddingLeft: 8,
                  fontFamily: "ZCOOL QingKe HuangYou"
                }}
              >
                Software Engineering Intern
              </p>
              <img
                width="200px"
                src="mumbai.png"
                alt="description dfffof "
                className="avatar2-img"
              />
            </Cell>
            <Cell col={6}>
              <p
                style={{
                  color: "#FFFFFF",
                  fontSize: "19px",
                  paddingLeft: 8,
                  fontFamily: "Dosis",
                  lineHeight: 1.5
                }}
              >
                Worked on a desktop application. Performed automation by writing
                SQL trigger which reduced client's data entry task by 70%.
                <br />
                Designed & deployed complex SQL queries for creation of new
                Reports. Modified stored procedures as per client's requirement.
                <br />
                Performed unit and Regression testing with production data and
                match existing manual system.
                <br />
                Contributed in group discussions/meetings for valuable changes,
                resolved defects and learned Agile development process.
              </p>
            </Cell>
          </Grid>

          <Footer />
        </div>
      );
    }
  }

  render() {
    return (
      <div
        className="fade-in"
        style={{
          backgroundColor: "#2274A5"
        }}
      >
        <div
          className="header-for-all"
          style={{
            backgroundColor: "#2274A5",
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
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab
            style={{
              color: "#FFFFFF"
            }}
          >
            Bankey
          </Tab>
          <Tab style={{ color: "#FFFFFF" }}>Trivia Softwares</Tab>
        </Tabs>
        <section>{this.selectcompany()}</section>
      </div>
    );
  }
}

export default Experience;
