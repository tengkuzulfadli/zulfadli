import React, {useState, useEffect} from "react";
import Icon from "../public/personal.jpeg"
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaStackOverflow, FaGithub } from "react-icons/fa";
import "./App.css";

const HomeBody = () => {
    const [linkedin, setLinkedin] = useState(false);
    const [github, setGithub] = useState(false);
    const [so, setSo] = useState(false);

    useEffect(() => {
        if (linkedin) {
            window.open('https://www.linkedin.com/in/tengkuzulfadli');
        }
    })

    useEffect(() => {
        if (github) {
            window.open('https://github.com/tengkuzulfadli');
        }
    })

    useEffect(() => {
        if (so) {
            window.open('https://stackoverflow.com/users/13414493/tengkuzulfadli');
        }
    })

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
                <button onClick={() => setLinkedin(true)} target="_blank" className="btn-icons">
                    <TiSocialLinkedinCircular className="icon-ln" />
                </button>

                <button onClick={() => setGithub(true)} target="_blank" className="btn-icons">
                    <FaGithub className="icon-git" />
                </button>

                <button onClick={() => setSo(true)} target="_blank" className="btn-icons">
                    <FaStackOverflow className="icon-so" />
                </button>
            </div>
        </>
    )
}

export default HomeBody