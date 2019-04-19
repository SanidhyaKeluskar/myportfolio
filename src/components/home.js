import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "./footer";

const Home = () => {
  return (
    <div className="fade-in">
      <div
        className="home-styling"
        style={{
          backgroundColor: "#B33951",
          paddingTop: 8,
          paddingBottom: 8
        }}
      >
        <p>
          <NavLink to="/about">
            {" "}
            <i class="fas fa-smile-beam" />{" "}
          </NavLink>{" "}
          About Me
        </p>
      </div>

      <div
        className="home-styling"
        style={{
          backgroundColor: "#2274A5",
          paddingTop: 8,
          paddingBottom: 8
        }}
      >
        <p>
          <NavLink to="/experience">
            {" "}
            <i class="fas fa-laptop-code" />{" "}
          </NavLink>
          Experience
        </p>
      </div>

      <div
        className="home-styling-three"
        style={{
          backgroundColor: "#E9F1F7",
          paddingTop: 8,
          paddingBottom: 8
        }}
      >
        <p>
          <NavLink to="/projects">
            {" "}
            <i class="fas fa-code-branch" />{" "}
          </NavLink>
          Projects
        </p>
      </div>

      <div
        className="home-styling-four"
        style={{
          backgroundColor: "#D0DB97",
          paddingTop: 8,
          paddingBottom: 8
        }}
      >
        <p>
          <NavLink to="/contact">
            {" "}
            <i class="far fa-envelope" />{" "}
          </NavLink>
          Contact
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
