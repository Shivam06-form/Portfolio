"use client";

import { Fragment } from "react";
import "./Qualification.css";
import Header from "@/components/Header";

export default function Graducation() {
  return (
    <Fragment>
      <Header />
      <div className="graducation">
        <ul>
          <li>
            <div> Bachelor of Science (B.Sc)</div>
            <b>Ignou University 2018 - 2023</b>
          </li>
          <li>
            <div> Senior Secondary (XII)</div>
            <b>NIOS board Year of completion: 2017 Percentage: 52.00%</b>
          </li>
          <li>
            <div> Secondary (X)</div>
            <b>(CBSC board) Year of completion: 2014 Percentage: 70.00%</b>
          </li>
          <li>
            <div> Cources</div>
            <b>
              I have done cources React.js , React-Native , Nodejs , HTML/CSS
              ,MERN , Javascript from Udemy and Intershala and i still learning
              Nextjs and other new skills
            </b>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
