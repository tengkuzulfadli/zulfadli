import React from "react";
import "./Portfolio.css";
import Projects from "../components/Projects";
import Github from "../components/Github";
import Banner from '../components/Banner-p';

function Portfolio(){
    return(
        <div className="main-portfolio">
            <Banner />
            <div className="main-pro">
                <h3 className="title">Personal Projects</h3>
                <div className="short-des">
                    <p>These are current personal projects:</p>
                </div>
            </div>
            <Projects />
            <div>
                <h3 className="title">Top 4 Github Repositories</h3>
                <Github />
            </div>
        </div>
    )
}

export default Portfolio;