import React from "react";
import grapes from "../Assets/images/grapes.png";

// stylesheets
import "../Assets/stylesheets/LogoTag.css";

function LogoTag() {
  return (
    <div className="logo-container">
      <span className="logo-container-grouping">
        <img className="grapes" src={grapes} alt="grape-logo" />
        <div>
          <h4 className="company-name">
            GrapeAlliance<p className="tag-line">Bringing Tech into Wine</p>
          </h4>
        </div>
      </span>
    </div>
  );
}

export default LogoTag;
