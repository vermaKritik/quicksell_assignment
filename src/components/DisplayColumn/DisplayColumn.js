import React from "react";
import "./DisplayColumn.css";
import { AiOutlinePlus, AiOutlineSmallDash } from "react-icons/ai";
import Card from "../Card/Card";
import { BsBarChartFill } from "react-icons/bs";

function DisplayColumn({ w, title, data }) {
  return (
    <div className="displayColumn" style={w && { minWidth: w}}>
      <div className="displayColumn_nav">
        <div className="center">
          <div style={{ marginRight: "15px" }}>
            <BsBarChartFill />
          </div>
          <div className="displayColumn_navTitleWrapper">
            <p className="displayColumn_navTitle">
              {title} {data.length}
            </p>
          </div>
        </div>

        <div className="center">
          <div style={{ marginRight: "10px" }}>
            <AiOutlinePlus style={{ color: "gray" }} />
          </div>
          <div>
            <AiOutlineSmallDash />
          </div>
        </div>
      </div>
      <div className="displayColumn_content">
        {data.map((el) => (
          <Card key={el.id} data={el} />
        ))}
      </div>
    </div>
  );
}

export default DisplayColumn;
