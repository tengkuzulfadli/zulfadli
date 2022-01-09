import React, { useState, useEffect } from "react";
import "./Github.css";
import data from "./data/github.json";
import Icon from '../../public/GitHub-logo.png';

const githubData = data.map((data) => {
    return(
        <div key={data.id} className="main-github">
            <div className="img-container">
                <div className="img-inner">
                    <div className="inner-skew">
                        <img src={Icon} width={150} height={100} className="icon" />
                    </div>
                </div>
            </div>
            <div className="single-card">
                <h3 className="single-title">{data.title}</h3>
                <p className="text-des">{data.description}</p>
                <p className="text-stack">{data.stack}</p>
                <a href={data.url} target="_blank" className="text-link">Explore source code</a>
            </div>
        </div>
    );
})

function Github(){
    const [gitClicked, setGitClicked] = useState(false);

    useEffect(() => {
        if (gitClicked) {
            window.open('https://github.com/tengkuzulfadli');
        }
    })

    return (
        <>
        <div>
            {githubData}
        </div>
        <button className="btn-github" onClick={() => setGitClicked(true)} target="_blank">Explore more</button>
        </>
    );
}

export default Github;
