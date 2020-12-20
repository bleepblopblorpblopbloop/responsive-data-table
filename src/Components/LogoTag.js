import React from "react";
import Portrait from "../Assets/images/Kyle_Chorley.png";

// stylesheets
import "../Assets/stylesheets/LogoTag.css";

function LogoTag() {
  return (
    <div className="logo-container">
      <span className="logo-container-grouping">
        <img className="portrait" src={Portrait} alt="portrait" />
        <div>
          <h4 className="name">
            Kyle Chorley<p className="tag-line">You should hire me!</p>
          </h4>
        </div>
      </span>
    </div>
  );
}

export default LogoTag;
