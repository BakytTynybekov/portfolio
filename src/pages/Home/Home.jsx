import React from "react";
import "./home.scss";
import "font-awesome/css/font-awesome.min.css";
import Typewriter from "typewriter-effect";
import Header from "../../components/Header/Header";

function Home() {
  return (
    <div className="home">
      <div className="home__inner">
        <div className="home__info ">
          <div className="home__info-inner">
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
            <div>
              <Header />
            </div>
            <div className="home__info-social">
              <a href="/">
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a href="/">
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </a>
              <a href="/">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="/">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="/">
                <i class="fa-solid fa-file-pdf"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="home__resume">
          <img
            src="https://jayhawk.tech/assets/undraw_coding_6mjf.svg"
            alt=""
          />
          <p>
            Hi! I'm Bakyt, passionate Frontend Software Developer{" "}
            <span role="img" aria-label="emoji">
              🚀
            </span>{" "}
            having an experience of building Web applications with JavaScript /
            Reactjs and some other cool libraries and frameworks.
          </p>
          <button>
            <a href="/">View Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
