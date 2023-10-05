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
