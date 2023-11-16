import React, { useState } from "react";
import "./Nav.css";
import { BsListCheck, BsChevronDown } from "react-icons/bs";
import FilterDialogBox from "../FilterDialogBox/FilterDialogBox";
import RippleButton from "../shared/RippleButton/RippleButton";

function Nav() {
  const [showDialog, setShowDialog] = useState(false);
  return (
    <div className="nav">
      <RippleButton
        onClick={() => {
          setShowDialog(!showDialog);
        }}
      >
        <div className="nav_button">
          <span>
            <BsListCheck />
          </span>
          <p>Display</p>
          <span>
            <BsChevronDown />
          </span>
        </div>
      </RippleButton>
      {showDialog && (
        <FilterDialogBox
          isOpen={showDialog}
          onClose={() => setShowDialog(!showDialog)}
        />
      )}
    </div>
  );
}

export default Nav;
