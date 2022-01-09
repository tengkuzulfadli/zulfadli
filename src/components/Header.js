import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import './Header.css';
import image from "../../public/zul.png";

function Header() {
  
  return (
    <>
      <Router>
        <div className="main-nav">
          <div>
            <img src={image} height={130} width={130} className="logo" />
          </div>
          <div className="second-nav">
            <Link to="/" className="nav"><span className="line">Home</span></Link>
            <Link to="/Portfolio" className="nav"><span className="line">Portfolio</span></Link>
            <Link to={{ pathname: 'https://www.linkedin.com/in/tengkuzulfadli' }} target="_blank" className="nav"><span className="line">Connect</span></Link>
          </div>
        </div>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Portfolio">
            <Portfolio />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default Header;