import React, { useState } from "react";
import "./Nav.css";
import { BsListCheck, BsChevronDown } from "react-icons/bs";
import FilterDialogBox from "../FilterDialogBox/FilterDialogBox";

function Nav() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="nav">
      <button className="nav_button" onClick={() => setShowDialog(!showDialog)}>
        <span>
          <BsListCheck />
        </span>

        <p>Display</p>

        <span>
          <BsChevronDown />
        </span>
      </button>
      {showDialog && <FilterDialogBox />}
    </div>
  );
}

export default Nav;
