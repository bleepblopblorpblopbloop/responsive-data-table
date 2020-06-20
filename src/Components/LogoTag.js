import React from "react";
import "../Assets/stylesheets/LogoTag.css";

// components
import { ReactComponent as ReactLogo } from "../Assets/images/grapes.svg";
// import Grapes from "./Grapes";

function LogoTag() {
  return (
    <div className="logo-container">
      <img
        className="grapes"
        src="../Assets/images/grapes.svg"
        alt="grape-logo"
      />
      <div>
        <h3 className="company-name">GrapeAlliance</h3>
        <p className="tag-line">Bringing Tech into Wine</p>
      </div>
    </div>
  );
}

export default LogoTag;
