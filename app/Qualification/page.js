"use client";

import { Fragment } from "react";
import "./Qualification.css";
import Header from "@/components/Header";
import Divider from "@/components/Divider";

export default function Graducation() {
  return (
    <Fragment>
      <metadata>
        <title>Qualification</title>
        <meta name="description" content="Qualifications of Shivam Bhagwat" />
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_Q_red-512.png"
        />
      </metadata>
      <Header />
      <Divider style={{ marginTop: "1%" }} />
      <div className="graducation">
        <ul>
          <li>
            <div>{`Bachelor's`} of Science (B.Sc)</div>
            <b>IGNOU 2018 - 2023</b>
          </li>
          <li>
            <div> Senior Secondary (XII)</div>
            <b>NIOS board  2017</b>
          </li>
          <li>
            <div> Secondary (X)</div>
            <b>(CBSC board) 2014</b>
          </li>
          <li>
            <div> Courses</div>
            <b>
              I know React.js , React-Native , Nodejs , HTML/CSS
              , MERN , Javascript and
              Nextjs
            </b>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
