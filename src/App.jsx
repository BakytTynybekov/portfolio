import "./App.css";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import { Fade } from "react-reveal";
import bioLogo from "./images/blogging.png";

function App() {
  return (
    <div className="App">
      <WelcomePage />
      <div className="about-me">
        <img
          className="img2"
          src="https://jayhawk.tech/assets/undraw_coding_6mjf.svg"
          alt=""
        />
        <div>
          <p>
            A passionate Frontend Developer 🚀 having an experience of building
            Web applications with JavaScript / Reactjs
          </p>
          <a href="/">
            <button>View Resume</button>
          </a>
        </div>
      </div>
      <div className="al">
        <Fade left>
          <div className="img">
            <img src={bioLogo} alt="asda" />
          </div>
        </Fade>
        <Fade right className="a">
          <h1>hello</h1>
        </Fade>
      </div>
    </div>
  );
}

export default App;
