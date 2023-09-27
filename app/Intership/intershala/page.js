import Image from "next/image";
import React from "react";
import IntershalaImg from "../../../components/Images/intershala.jpeg";

export default function intershala() {
  return (
    <div className="image">
      {" "}
      <metadata>
        <title>Intershala</title>
        <meta name="description" content="Intership of intershala" />
      </metadata>
      <Image src={IntershalaImg} alt="Intership" />
    </div>
  );
}
