import Image from "next/image";
import React from "react";
import IntershipImg from "../../../components/Images/IntershipImg.png";

export default function Intership() {
  return (
    <div className="image">
      <Image src={IntershipImg} alt="Intership" />
    </div>
  );
}
