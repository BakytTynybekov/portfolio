import React from "react";
import "./welcome-page.scss";
import "font-awesome/css/font-awesome.min.css";

import Typewriter from "typewriter-effect";

function WelcomePage() {
  return (
    <div className="home">
      <header className="home__header">
        <div className="logo">slkfjls</div>

        <ul className="home__menu">
          <li className="home__menu-item">
            <a href="" className="home__menu-link">
              Home
            </a>
          </li>
          <li className="home__menu-item">
            <a href="" className="home__menu-link">
              About
            </a>
          </li>
          <li className="home__menu-item">
            <a href="" className="home__menu-link">
              Resume
            </a>
          </li>
          <li className="home__menu-item">
            <a href="" className="home__menu-link">
              Projects
            </a>
          </li>
          <li className="home__menu-item">
            <a href="" className="home__menu-link">
              Contacts
            </a>
          </li>
        </ul>
      </header>
      <div className="home__inner">
        <div className="home__info ">
          <h1>Bakyt Tynybekov</h1>
          <h2>
            <Typewriter
              className="typewriter"
              options={{
                strings: ["Frontend Developer."],
                autoStart: true,
                loop: true,
                typeSpeed: 1800,
              }}
            />
          </h2>
          <div className="home__social">
            <a href="/">
              {" "}
              <i class="fa-solid fa-envelope"></i>{" "}
            </a>
            <a href="/">
              {" "}
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="/">
              {" "}
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="/">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="home__footer"></div>
    </div>
  );
}

export default WelcomePage;
