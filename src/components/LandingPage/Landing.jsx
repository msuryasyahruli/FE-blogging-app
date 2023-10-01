import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

const Landing = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <LeftColumn/>
          <RightColumn/>
        </div>
      </div>
    </>
  );
};

export default Landing;
