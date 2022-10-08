import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <div className="imageContainer">
        <img src={data.src.large} alt="img" />
      </div>
      <div className="info">
        <p style={{ color: "black",textShadow: "grey 3px 3px 3px" }}>{data.photographer}</p>
      </div>
    </div>
  );
};

export default Picture;
