"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Fragment } from "react";
import "./WorkSamples.css";
import Divider from "@/components/Divider";

export default function WorkSamples() {
  const FakeDate = [
    {
      id: 1,
      name: "REACT",

      info: "2+ years of experince",
    },
    {
      id: 2,
      name: "NODEJS",

      info: "1+ year of experince",
    },
    {
      id: 3,
      name: "REACT-NATIVE",

      info: "1+ year of experince",
    },
  ];

  return (
    <Fragment>
      <metadata>
        <title>Work Samples</title>
        <meta name="description" content="Some of my work samples" />
        <link
          rel="icon"
          href="https://cdn2.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_W_red-2-256.png"
        />
      </metadata>
      <Header /> <Divider style={{ marginTop: "1%" }} />
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
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>SAMPLE CSS WORK</h1>
        <div className="fakedata-conatainer">
          {FakeDate.map((data) => {
            return (
              <div key={data.id} className="fakedata-card">
                <div className="card_">
                  <div className="card_1">
                    <div></div>
                  </div>
                  <div className="card_2">
                    <div></div>
                  </div>
                </div>
                <div className="card-2">
                  <b> {data.name}</b> <summery> {data.info}</summery>{" "}
                </div>
                <div className="foot_">
                  <div className="foot_1">
                    <div></div>
                    <div className="foot_2"></div>
                    <div className="foot_3"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
}
