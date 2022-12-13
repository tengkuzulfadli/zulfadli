import React from "react";
import Icon from "../public/personal.jpeg"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./App.css";

const HomeBody = () => {

    let linkedInUrl = 'https://www.linkedin.com/in/tengkuzulfadli'
    let githubUrl = 'https://github.com/tengkuzulfadli'
    let googleUrl = 'https://www.cloudskillsboost.google/public_profiles/0553bf23-bbb6-4383-a9d7-40a65871cbc6'

    return(
        <>
            <div>
                <img alt="" src={Icon} width={300} height={300} style={{ borderRadius: "50%", marginTop: "15%" }} />
            </div>
            <div className="intro">
                <h2 style={{ marginBottom: "0.75rem" }}>My name is Tengku Zulfadli</h2>
                <h4>JavaScript | SWIFT | GCP | Product Management</h4>
            </div>
            <div>
                <button onClick={() => window.location.href = linkedInUrl } target="_blank" className="btn-icons">
                    <TiSocialLinkedinCircular className="icon-ln" />
                </button>

                <button onClick={() => window.location.href = githubUrl } target="_blank" className="btn-icons">
                    <FaGithub className="icon-git" />
                </button>

                <button onClick={() => window.location.href = googleUrl } target="_blank" className="btn-icons">
                    <FcGoogle className="icon-so" />
                </button>
            </div>
        </>
    )
}

export default HomeBody