"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Fragment } from "react";
import "./WorkSamples.css";
import Divider from "@/components/Divider";

export default function WorkSamples() {
  const CssDate = [
    {
      id: 1,
      name: "REACT",

      info: "React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.",
    },
    {
      id: 2,
      name: "NODEJS",

      info: "Node.js is an open-source, cross-platform JavaScript runtime environment. Node.js runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser.",
    },
    {
      id: 3,
      name: "Nextjs",

      info: "1Next.js is a React-based, open-source web development framework that enables React-based web applications",
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
            <summary style={{ color: "white" }}>Built using Nextjs</summary>
            <Link
              href="https://next-gameinfo-app.vercel.app/"
              target="_blank"
            >
              https://next-gameinfo-app.vercel.app/
            </Link>{" "}
          </li>
          <li>
            <div>job-less </div>
            <summary style={{ color: "white" }}>
              Built using Reactjs and Nodejs (Just for Payment Part)
            </summary>
            <Link href="https://job-less-12094.web.app/" target="_blank">
              https://job-less-12094.web.app/
            </Link>
          </li>

          <li>
            <div>Threats and Trends shopping app </div>
            <summary style={{ color: "white" }}>
              Built using Reactjs and Nodejs (Just for Payment Part)
            </summary>
            <Link href="https://threads-cb101.web.app/" target="_blank">
              https://threads-cb101.web.app/
            </Link>
          </li>

          <li>
            <div>Stack-overflow-demo </div>
            <summary style={{ color: "white" }}>
              Built using MERN (MongoDB , Express , REACTJS , NODEJS)
            </summary>
            <Link
              href="https://stack-overflow-clone06.netlify.app/"
              target="_blank"
            >
              https://stack-overflow-clone06.netlify.app/
            </Link>
          </li>
          <li>
            <div>Tic-Tac-To Game</div>
            <summary style={{ color: "white" }}>
              Built using React.js
            </summary>
            <Link
              href="https://tic-tak-to-2.vercel.app/"
              target="_blank"
            >
              https://tic-tak-to-2.vercel.app/
            </Link>
          </li>
          <li>
            <div>Twitch-Clone</div>
            <summary style={{ color: "white" }}>
              Built using React.js
            </summary>
            <Link
              href="https://twitch-site-clone.netlify.app/"
              target="_blank"
            >
              https://twitch-site-clone.netlify.app/
            </Link>
          </li>
        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>CSS WORK</h1>
        <div className="cssdata-conatainer">
          {CssDate.map((data) => {
            return (
              <div key={data.id} className="cssdata-card">
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
