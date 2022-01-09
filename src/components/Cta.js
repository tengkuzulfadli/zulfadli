import React, { useState } from 'react';
import './Cta.css';

function Cta(){
    const [email, setEmail] = useState("");

    function onChange(e) {
        setEmail(e.target.value);
    }
    
    function onSubmit(event) {
        event.preventDefault();
        console.log(`Your email address is : ${email}`);
    }

    return(
        <div className="main-cta">
            <div className="title-cta">
                <h3>Having a freelance project?</h3>
            </div>
            <div>
                <form onSubmit={onSubmit}>
                    <p className="p-form">Please enter your email address to request my resume:</p>
                    <input placeholder="Request my resume.." type="email" className="form-cta" onChange={onChange} />
                    <button className="form-btn">Send</button>
                </form>
            </div>
        </div>
    );
}

export default Cta;