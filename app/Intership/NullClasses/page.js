import Image from "next/image";
import React from "react";
import IntershipImg from "../../../components/Images/IntershipImg.png";

export default function Intership() {
  return (
    <div className="image">
      {" "}
      <metadata>
        <title>NULLCLASS</title>
        <meta name="description" content="Intership of NULLCLASS" />
      </metadata>
      <Image src={IntershipImg} alt="Intership" />
    </div>
  );
}
