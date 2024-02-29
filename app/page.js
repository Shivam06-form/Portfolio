"use client";
import Detials from "@/components/Detials/Detials";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import React, { Fragment, useRef, useState } from "react";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";

import "./global.css";

export default function Page() {
  const MoveToRef = useRef();

  return (
    <Fragment>
      <metadata>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Shivam Bhagwat" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=0.5" /> */}
        <link
          rel="icon"
          href="https://cdn-icons-png.flaticon.com/512/8370/8370972.png"
        />
      </metadata>
      <Header />
      <FirstPage moveTo={MoveToRef} />
      <Detials MoveToRef={MoveToRef} />
      <Education />
      <Footer />
    </Fragment>
  );
}
