import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="photo">
      <div className="imgDiv">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="autor">
        <p style={{ color: "black",textShadow: "grey 3px 3px 3px" }}>{data.photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
