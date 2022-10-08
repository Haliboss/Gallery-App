import React from "react";
import Picture from "../components/Picture";
import data from "../helper/data";

const Homepage = () => {
    return (
        <div>
            <h1>best photos</h1>
            <div className="mainPhoto">
                {data.map((data) => {
                    return <Picture data={data} />
                })}
            </div>
        </div>
    )
}

export default Homepage;