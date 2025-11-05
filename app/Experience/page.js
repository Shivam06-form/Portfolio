"use client";

import Header from "@/components/Header";
import { Fragment } from "react";
import "./EXPERINCE.css";
import Link from "next/link";
import Divider from "@/components/Divider";

export default function Experience() {
  return (
    <Fragment>
      {" "}
      <metadata>
        <title>Experience</title>
        <meta name="description" content="Experiences of NULLCLASS" />
        <link
          rel="icon"
          href="https://cdn3.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_E_red-128.png"
        />
      </metadata>
      <Header /> <Divider style={{ marginTop: "1%" }} />
      <h2>Learning</h2>
      <ul className="EXPERINCE">
        <li>
          <div>REACTJS</div>
          <b> 3 years of Experience </b>
        </li>
        <li>
          <div>NODEJS</div>
          <b> 2 years of Experience </b>
        </li>
        <li>
          <div>HTML/CSS</div>
          <b> 3 years of Experience </b>
        </li>
        <li>
          <div>NEXTJS</div>
          <b> 1 year </b>
        </li>
        <li>
          <div>REACT-NATIVE</div>
          <b> 2 year of Experience and still learning </b>
        </li>
        <li>
          <div>MERN</div>
          <b> 2 year of Experience and still learning </b>
        </li>
        <li>
          <div>Certificates</div>
          <div className="links">
            <Link
              href="/Intership/NullClasses"
              target="_blank"
              style={{ color: "gold" }}
            >
              Intership Certificate From NUll CLASSES
            </Link>
            <Link
              href="/Intership/intershala"
              target="_blank"
              style={{ color: "gold" }}
            >
              Intershala Certificate For Compeleting HTML/CSS course
            </Link>
            <Link
              href="/Intership/Udemy"
              target="_blank"
              style={{ color: "gold" }}
            >
              Udemy Certificate For Compeleting JavaScript course
            </Link>
          </div>
        </li>
      </ul>
      <h2>Working</h2>
      <ul className="EXPERINCE">
        <li>
          <div>React-Native</div>
          <b> 5 Months in TRS Software Solutions Pvt Ltd.</b>
        </li>
        <li>
          <div>React-Native</div>
          <b> 10 Months in Asyscraft technologies pvt ltd.</b>
        </li>
      </ul>
    </Fragment>
  );
}
