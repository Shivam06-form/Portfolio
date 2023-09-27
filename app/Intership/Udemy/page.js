import Image from "next/image";
import React from "react";
import UdemyImg from "../../../components/Images/udemy.jpeg";

export default function Udemy() {
  return (
    <div className="image">
      {" "}
      <metadata>
        <title>UDEMY</title>
        <meta name="description" content="Course Certificate of Udemy" />
      </metadata>
      <Image src={UdemyImg} alt="Intership" />
    </div>
  );
}
