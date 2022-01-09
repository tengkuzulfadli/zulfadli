import React from "react";
import "./Features.css";
import { IoLogoJavascript } from "react-icons/io";
import { GrSwift } from "react-icons/gr";
import { SiTailwindcss, SiFirebase } from "react-icons/si";

function Features(){
    return(
        <>
            <div className="features-main">
                <h3 className="features-title">Languages & DevTools that I speak</h3>
                <div className="features-icon">
                    <div>
                        <IoLogoJavascript className="icon-js" />
                        <GrSwift className="icon-sw" />
                    </div>
                    <div>
                        <SiTailwindcss className="icon-tw" />
                        <SiFirebase className="icon-fb" />
                    </div>
                    {/*<div>
                        <img src={adalo-img} height={80} width={80} className="icon-ad" />
                        <img src={draftbit-img} height={80} width={80} className="icon-dr" />
                    </div>*/}
                    
                </div>
            </div>
        </>
    );
}

export default Features;