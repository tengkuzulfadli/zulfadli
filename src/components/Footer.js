import React, { useState, useEffect } from 'react';
import "./Footer.css";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaStackOverflow, FaGithub } from "react-icons/fa";

function Footer(){
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
        <div className="main-footer">
            <div>
                <button onClick={() => setLinkedin(true)} target="_blank" className="btn-icon"><TiSocialLinkedinCircular className="icon-ln" /></button>

                <button onClick={() => setGithub(true)} target="_blank" className="btn-icon"><FaGithub className="icon-git" /></button>

                <button onClick={() => setSo(true)} target="_blank" className="btn-icon"><FaStackOverflow className="icon-so" /></button>
            </div>
            <div>
                <p className="copy">&copy; Tengku Zulfadli 2022</p>
            </div>
        </div>
    );
}

export default Footer;