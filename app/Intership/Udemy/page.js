import Image from "next/image";
import React from "react";
import UdemyImg from "../../../components/Images/udemy.jpeg";

export default function Udemy() {
  return (
    <div className="image">
      <Image src={UdemyImg} alt="Intership" />
    </div>
  );
}
