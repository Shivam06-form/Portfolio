import Image from "next/image";
import React, { Fragment, useEffect, useRef, useState } from "react";
import react from "../Images/react.png";
import "./Detials.css";
import Divider from "../Divider";

const Detials = ({ MoveToRef }) => {
  const Ref = useRef();

  const [showDetials, setShowDetials] = useState(false);

  const revelSection = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setShowDetials(true);
    }
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(revelSection, {
      root: null,
      threshold: 0.15,
    });
    if (MoveToRef) {
      sectionObserver.observe(MoveToRef.current);
    }
  }, [MoveToRef]);

  return (
    <Fragment>
      <Divider DividerRef={Ref} style={{ marginTop: "10%" }} />
      <div className={`${showDetials ? "detail" : "hidden"}`} ref={MoveToRef}>
        <ul className="job-type">
          <Image src={react} alt="name" className="job-type-image" priority />
          <div> WEB DEVELOPER</div>
        </ul>
        <ul className="detials">
          <div> Name: </div>
          <b> SHIVAM BHAGWAT</b>
        </ul>
        <ul className="detials">
          <div> AGE: </div> <b> 25</b>
        </ul>
        <ul className="detials">
          <div> QUALIFICATION :</div>
          <b> BSC PHYSICS GRADUATE FROM IGNOU UIVERSITY</b>
        </ul>
        <ul className="detials">
          <div>JOB EXPERINCE:</div> <b> FRESHER</b>
        </ul>
        <ul className="detials">
          <div> EXPERINCE:</div>
          <b> 2 years</b>
        </ul>
        <ul className="detials">
          <div> CTC : </div> <b> 15,000 Rs- 20,000 Rs</b>
        </ul>
        <ul className="detials">
          <div> ADDRESS : </div>
          <b> ROHINI SECTOR-16 , DELHI 110089</b>
        </ul>
        <ul className="detials">
          <div> SKILLS:</div>
          <div className="skills">
            <b>REACT.JS (Intermediate)</b> , <b> NODE.JS(Intermediate)</b> ,
            <b> REACT-NATIVE(Intermediate)</b> , <b> NEXT.JS(BEGINNER)</b>
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default Detials;
