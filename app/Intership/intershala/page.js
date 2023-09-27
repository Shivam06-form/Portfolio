import Image from "next/image";
import React from "react";
import IntershalaImg from "../../../components/Images/intershala.jpeg";

export default function intershala() {
  return (
    <div className="image">
      <Image src={IntershalaImg} alt="Intership" />
    </div>
  );
}
