import React, { Fragment } from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  const ListItems = [
    { id: 1, name: "Qualification" },
    { id: 2, name: "WorkSamples" },
    { id: 3, name: "Experience" },
  ];

  // const pathname = window.location.pathname;

  return (
    <div className="header">
      <header>
        <Link href="/" className="header-name">
          SHIVAM
        </Link>

        <div className="list">
          {ListItems.map((list) => {
            return (
              <Fragment key={list.id}>
                <Link href={`/${list.name}`}> {list.name}</Link>
              </Fragment>
            );
          })}
        </div>
      </header>
    </div>
  );
};

export default Header;
