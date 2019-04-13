import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Grid, Cell } from "react-mdl";
import Footer from "./footer";

class Contact extends Component {
  componentDidMount() {
    document.body.style.backgroundColor = "#D0DB97";
  }
  render() {
    return (
      <div style={{ backgroundColor: "#D0DB97", minHeight: "100vh" }}>
        <div
          className="header-black"
          style={{
            backgroundColor: "#D0DB97",
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
        <div style={{ minHeight: "95vh" }}>
          <Grid className="grid-contact-header">
            <Cell col={12}>
              <p>Contact me</p>
            </Cell>
          </Grid>

          <Grid className="grid-contact">
            <Cell col={6}>
              <p>Sanidhya Keluskar</p>
              <p>2301 E Street Northwest Washington DC</p>
              <p>svkeluskar@gwu.edu</p>
              <p>keluskarsanidhya@gmail.com</p>
              <p>+1(301)535-8733</p>
              <img width="150" src="barcode.svg" alt="description dfffof " />
            </Cell>
            <Cell col={6} className="grid-custom">
              <Grid>
                <Cell col={4}>
                  <a
                    href="https://github.com/SanidhyaKeluskar"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-github" />
                  </a>
                </Cell>
                <Cell col={4}>
                  <a
                    href="https://www.linkedin.com/in/sanidhyakeluskar/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i class="fab fa-linkedin" />
                  </a>
                </Cell>
                <Cell col={4}>
                  <a
                    href="mailto: svkeluskar@gwu.edu"
                    rel="noopener noreferrer"
                    target="_top"
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                  </a>
                </Cell>
              </Grid>
            </Cell>
          </Grid>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Contact;
