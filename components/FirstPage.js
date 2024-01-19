import React, { Fragment } from "react";
import "./FirstPage.css";
import ProfileImage from "./Images/profile.jpeg";
import Image from "next/image";
import Divider from "./Divider";

const FirstPage = ({ moveTo }) => {
  return (
    <Fragment>
      <Divider style={{ marginTop: "1%" }} />
      <div className="first">
        <summary className="summary">
          <h1>{"Hii, I'm Shivam Bhagwat"}</h1>
          {`I have acquired skills in ReactJS,
        Node.js, React Native, HTML/CSS,Next.js`}

          <button
            onClick={() => {
              if (moveTo) {
                window.scroll({
                  top: moveTo.current.getBoundingClientRect().top,
                  left: 0,
                  behavior: "smooth",
                });
              }
            }}
          >
            More about me ⬇
          </button>
        </summary>
        <Image
          src={ProfileImage}
          alt="Picture of the author"
          className="image card"
          priority
        />{" "}
      </div>
    </Fragment>
  );
};

export default FirstPage;
