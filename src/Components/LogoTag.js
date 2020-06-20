import React from "react";
import "../Assets/stylesheets/LogoTag.css";
import grapes from "../Assets/images/grapes.png";

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
