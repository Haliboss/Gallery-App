import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
  return (
    <div>
      <h1>best photos</h1>
      <div className="mainPhoto">
        {data.map((data, index) => {
          return <Picture data={data} key={index}/>;
        })}
      </div>
    </div>
  );
};

export default Homepage;
