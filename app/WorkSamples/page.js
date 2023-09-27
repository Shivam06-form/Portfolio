"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Fragment } from "react";
import "./WorkSamples.css";


export default function WorkSamples() {
  return (
    <Fragment>
      <metadata>
        <title>Work Samples</title>
        <meta name="description" content="Some of my work samples" />
      </metadata>

      <Header />
      <div className="Work">
        <ul>
          <li>
            <div>Gaming 🎮 App (Demo) </div>
            <summary>Build using Reactjs</summary>
            <Link
              href="https://buyitcheap-5ac3f.firebaseapp.com/#/"
              target="_blank"
            >
              https://buyitcheap-5ac3f.firebaseapp.com/#/{" "}
            </Link>{" "}
          </li>
          <li>
            <div>job-less </div>
            <summary>
              Build using Reactjs and Nodejs (Just for Payment Part)
            </summary>
            <Link href="https://job-less-12094.web.app/" target="_blank">
              https://job-less-12094.web.app/
            </Link>
          </li>

          <li>
            <div>Threats and Trends shopping app </div>
            <summary>
              Build using Reactjs and Nodejs (Just for Payment Part)
            </summary>
            <Link href="https://threads-cb101.web.app/" target="_blank">
              https://threads-cb101.web.app/
            </Link>
          </li>

          <li>
            <div>Stack-overflow-demo </div>
            <summary>
              Build using MERN (MongoDB , Express , REACTJS , NODEJS)
            </summary>
            <Link
              href="https://stack-overflow-clone06.netlify.app/"
              target="_blank"
            >
              https://stack-overflow-clone06.netlify.app/
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}
