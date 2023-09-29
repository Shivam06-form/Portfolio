"use client";

import Detials from "@/components/Detials/Detials";
import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import React, { Fragment, useRef, useState } from "react";

export default function Page() {
  const MoveToRef = useRef();

  console.log(MoveToRef)

  return (
    <Fragment>
      <metadata>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Shivam Bhagwat" />
      </metadata>
      <Header />
      <FirstPage moveTo={MoveToRef} />
      <Detials MoveToRef={MoveToRef} />
    </Fragment>
  );
}
