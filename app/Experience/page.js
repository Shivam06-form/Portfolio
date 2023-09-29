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
      </metadata>
      <Header />    <Divider  style={{marginTop:"1%"}} />
      <ul className="EXPERINCE">
        <li>
          <div>REACTJS</div>
          <b> 2 years of Experience (Intermediate)</b>
        </li>
        <li>
          <div>NODEJS</div>
          <b> 1 years of Experience (Intermediate)</b>
        </li>
        <li>
          <div>HTML/CSS</div>
          <b> 2 years of Experience (Intermediate)</b>
        </li>
        <li>
          <div>NEXTJS</div>
          <b> 1 month of Experience and still learning (Beginner)</b>
        </li>
        <li>
          <div>REACT-NATIVE</div>
          <b> 1.5 year of Experience and still learning (Intermediate)</b>
        </li>
        <li>
          <div>MERN</div>
          <b> 1.5 year of Experience and still learning (Intermediate)</b>
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
    </Fragment>
  );
}
