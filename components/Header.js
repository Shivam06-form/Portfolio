import React, { Fragment } from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  const ListItems = [
    { id: 1, name: "Qualification" },
    { id: 2, name: "WorkSamples" },
    { id: 3, name: "Experience" },
  ];

  const pathname = window.location.pathname;

  return (
    <div className="header">
      <header>
        <div
          style={{ cursor: "pointer", fontSize: "larger" }}
          onClick={() => {
            window.location.href = "/";
          }}
        >
          SHIVAM
        </div>
        <div className="list">
          {ListItems.map((list) => {
            return (
              <Fragment key={list.id}>
                <li
                  className={`${
                    pathname === `/${list.name}` ? "list--selected " : ""
                  }  `}
                  onClick={() => {
                    window.location.href = `/${list.name}`;
                  }}
                >
                  {list.name}
                </li>
              </Fragment>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Header;
