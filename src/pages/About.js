import React, { useState, useEffect } from "react";
import "./About.css";
import image from "../../public/profile.jpeg";


function About(){

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        if (clicked) {
            window.open('https://www.linkedin.com/in/tengkuzulfadli');
        }
    })
    
    return(
        <div className="main-about">
            <h3 className="about-title">A short brief about me</h3>
            <div>
                <img src={image} height={150} width={150} className="about-img" />
            </div>
            <div className="about-des">
                <p>Innovative Front End Developer with 4 years experience building and maintaining responsive websites.</p>
                <p>Proficient in Tailwind CSS, JavaScript frameworks and libraries; ReactJS, GatsbyJS & NextJS, plus No-SQL with Firebase and GraphQL.</p>
                <p>Passionate in iOS Dev with SWIFT, React Native for Android and PWA and Low-Code Dev with Adalo, Draftbit & Webflow</p>
            </div>
            <button className="about-btn" onClick={() => setClicked(true)} target="_blank">Connect</button>
        </div>
    );
}

export default About;