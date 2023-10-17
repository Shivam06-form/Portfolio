import React, { Fragment, useRef } from "react";
import Divider from "../Divider";
import "./Education.css";
import Image from "next/image";
import NIOS from "../Images/NIOS.png";
import IGNOU from "../Images/IGNOU.png";
import KVS from "../Images/KVS.png";
import { Observer } from "../Custom/Observer";

const Education = () => {
  const Ref = useRef();

  const getObserver = Observer({ RefProp: Ref });

  const EducationList = [
    {
      id: 1,
      name: "GRADUATION",
      image: IGNOU,
      info: "BSC GRADUATE (2018-2023)",
    },
    {
      id: 2,
      name: "12th",
      image: NIOS,
      info: "12th NIOS (2017)",
    },
    { id: 3, name: "10th", image: KVS, info: "10th CBSE (2014)" },
  ];

  return (
    <Fragment>
      {/* <Divider /> */}
      <div className="Container-Cover ">
        <div
          className={`${getObserver.showDetials ? "container show" : "hidden"}`}
          ref={Ref}
        >
          {EducationList.map((education) => {
            return (
              <div className="Education" key={education.id}>
                <div className="front">{education.name}</div>
                <div className="back">
                  <div className="back-info">
                    <Image alt={education.name} src={education.image} />

                    <summary>{education.info}</summary>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export default Education;
