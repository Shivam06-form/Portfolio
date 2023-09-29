import React, { useRef } from "react";

const Divider = ({ style, DividerRef }) => {
  return <div className="Divider" style={style}  ref={DividerRef}></div>;
};

export default Divider;
