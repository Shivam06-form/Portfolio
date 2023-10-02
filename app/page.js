"use client";

import Detials from "@/components/Detials/Detials";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import React, { Fragment, useRef, useState } from "react";
import Education from "@/components/Education/Education";

export default function Page() {
  const MoveToRef = useRef();

  return (
    <Fragment>
      <metadata>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Shivam Bhagwat" />
      </metadata>
      <Header />
      <FirstPage moveTo={MoveToRef} />
      <Detials MoveToRef={MoveToRef} />
      <Education />
    </Fragment>
  );
}
