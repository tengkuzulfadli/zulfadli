import React, { useState, useEffect } from "react";
import "./Projects.css";
import data from "./data/data.json";
import Icon from "../../public/code.png";
import { GrCode } from "react-icons/gr";
import { GiFlatPlatform } from "react-icons/gi";

const projectData = data.map((data) => {
    return(
        <div className="main-section">
            <div key={data.id} className="main-project">
                <div className="single-card-p">
                    <div className="image-card">
                        <img src={Icon} width={150} height={150} className="image-single" />
                    </div>
                    <span className="content">
                        <h3 className="single-title-p">{data.title}</h3>
                        <p className="text-des-p">{data.description}</p>
                        <p className="text-stack-p"><GrCode /> {data.stack}</p>
                        <p className="text-stack-p"><GiFlatPlatform /> {data.platform}</p>
                        <p target="_blank" className="text-link-p">Explore</p>
                    </span>
                </div>
            </div>
        </div>
    );
})

function Projects(){
    
    return (
        <>
        {projectData}
        </>
    );
}

export default Projects;