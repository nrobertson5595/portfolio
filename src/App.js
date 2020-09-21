import { render } from "@testing-library/react";
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Projects from "./Projects.js";
import Articles from "./Articles.js";
import About from "./About.js";
import logo from "./logo.svg";

const App = () => {
  render();
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <img src={logo} className="logo-image" alt="Logo Image" />
          <div className="navigation-sub">
            <Link to="/" className="item">
              Projects
            </Link>

            <Link to="/articles" className="item">
              Articles
            </Link>

            <Link to="/about" className="item">
              About
            </Link>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
