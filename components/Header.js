import React from "react";

import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <header>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          SHIVAM
        </div>
        <div className="list">
          <li
            onClick={() => {
              window.location.href = "/Qualification";
            }}
          >
            {" "}
            Qualification
          </li>
          <li
            onClick={() => {
              window.location.href = "/WorkSamples";
            }}
          >
            Work Samples
          </li>
          <li
            onClick={() => {
              window.location.href = "/Experience";
            }}
          >
            Experience{" "}
          </li>
        </div>
      </header>
    </div>
  );
};

export default Header;
