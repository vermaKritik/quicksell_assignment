import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import "./DisplayColumn.css";
import Card from "../Card/Card";
import RippleButton from "../shared/RippleButton/RippleButton";
import Avatar from "../shared/Avatar/Avatar";
import { sortFormattedData } from "../../util/dataFormattingHelper";

function DisplayColumn({ w, element, title, data, icon, type}) {
  const ordering = useSelector((state) => state.filtersSlice.ordering);
  const users = useSelector((state) => state.userSlice.users);

  const [sortedData, setSortedData] = useState(data);
  useEffect(() => {
    const sortedDataTemp = sortFormattedData(data, ordering);
    setSortedData(sortedDataTemp);

    return () => {};
  }, [data, ordering]);

  return (
    <div className="displayColumn" style={w && { minWidth: w }}>
      <div className="displayColumn_nav">
        <div className="center">
          <div className="center" style={{ marginRight: "10px" }}>
            {type === "users" ? (
              <Avatar
                name={users[element.id]?.name}
                available={users[element.id]?.available}
              />
            ) : (
              icon && icon
            )}
          </div>
          <div className="displayColumn_navTitleWrapper">
            <p className="displayColumn_navTitle">
              {title}
              <span>{data.length}</span>
            </p>
          </div>
        </div>

        <div className="center">
          <div style={{ marginRight: "10px" }}>
            <RippleButton noBorder>
              <FaPlus style={{ color: "gray", margin: "0 5px" }} />
            </RippleButton>
          </div>
          <div>
            <RippleButton noBorder>
              <BsThreeDots style={{ color: "gray", margin: "0 5px" }} />
            </RippleButton>
          </div>
        </div>
      </div>
      <div className="displayColumn_content">
        {sortedData.map((el) => (
          <Card key={el.id} data={el} type={type} />
        ))}
      </div>
    </div>
  );
}

export default DisplayColumn;
