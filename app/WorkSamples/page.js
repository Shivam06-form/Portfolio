"use client";

import Header from "@/components/Header";
import Link from "next/link";
import { Fragment } from "react";
import "./WorkSamples.css";
import Divider from "@/components/Divider";
import { CssData, WorkSample } from '../WorkSamples/Data.json'
import Clock from "@/components/Clock/Clock";
import Image from "next/image";


export default function WorkSamples() {


  return (
    <Fragment>
      <metadata>
        <title>Work Samples</title>
        <meta name="description" content="Some of my work samples" />
        <meta name="viewport" content="width=device-width, initial-scale=0.8" />
        <link
          rel="icon"
          href="https://cdn2.iconfinder.com/data/icons/letters-and-numbers-1/32/letter_W_red-2-256.png"
        />
      </metadata>
      <Header /> <Divider style={{ marginTop: "1%" }} />
      <div className="Work">
        <ul>
          {(WorkSample || []).map((work, i) => {
            return (
              <li key={work.id} className={`${i % 2 == 0 ? "Work-li-right" : "Work-li-left"} `}>
                <div className="Work-Detials">
                  <h4>{work.Name}</h4>
                  <summary style={{ color: "black" }}>{work.summery}</summary>
                  <Link
                    href={work.Link}
                    target="_blank"
                  >
                    {work.Link}
                  </Link>{" "}
                </div>
                <Image src={work.image} alt={work.image}
                  className="work-image" priority
                  width={400} height={200} />
              </li>
            )
          })}

        </ul>
      </div>
      <div style={{ width: "80%", margin: "auto" }}>
        <h1>CSS WORK</h1>
        <Clock />
        <div className="cssdata-conatainer">
          {CssData.map((data) => {
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
