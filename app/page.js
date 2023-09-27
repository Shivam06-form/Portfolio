"use client";

import FirstPage from "../components/FirstPage";
import Header from "../components/Header";
import Link from "next/link";
import React, { Fragment } from "react";

export default function Page() {
  return (
    <Fragment>
      <metadata>
        <title>Portfolio</title>
        <meta name="description" content="Portfolio of Shivam Bhagwat" />
      </metadata>
      <Header />
      <FirstPage />
      <summary>
        {`Hello, my name is Shivam Bhagwat. I am 25 years old, and I have been
        learning web development since 2021. I have acquired skills in ReactJS,
        Node.js, React Native, HTML/CSS, and I'm looking forward to learning
        more skills in the upcoming future. Here is my Some Work Samples`}{" "}
        <Link href="https://threads-cb101.web.app/" target="_blank">
          https://threads-cb101.web.app/
        </Link>
        ,{" "}
        <Link href="https://job-less-12094.web.app/" target="_blank">
          https://job-less-12094.web.app/
        </Link>
        ,{" "}
        <Link
          href="https://buyitcheap-5ac3f.firebaseapp.com/#/"
          target="_blank"
        >
          https://buyitcheap-5ac3f.firebaseapp.com/#/
        </Link>
        ,
      </summary>
    </Fragment>
  );
}
