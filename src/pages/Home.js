import React from "react";
import "./Home.css";
import TypistAnim from "../components/Typist-animation";
import About from "./About";
import Features from "../components/Features";

function Home(){

    return(
        <>
            <div className="container">
                <TypistAnim />
            </div>
            <About />
            <Features />
        </>
    )
}

export default Home;