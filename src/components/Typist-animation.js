import React from "react";
import "../pages/Home.css";

var ReactRotatingText = require("react-rotating-text");

function TypistAnim() {
  return (
        <div className="typist">
          <h2>
            My name is Tengku Zulfadli. Who passionates in <br/>
            <ReactRotatingText
              items={[
                " React & React Native",
                " iOS Dev with SWIFT ",
                " Firebase ",
                " Low-Code Dev with Adalo "
              ]}
              color="#A2ADA5"
            />
          </h2>
        </div>
  );
}
export default TypistAnim;
