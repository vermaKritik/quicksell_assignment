import React, { useEffect, useState } from "react";
import "./Avatar.css";

const colors = ["#96e16b", "#6c6ce7a1", "#ec7440", "#ffc941"];

function Avatar({ img, name, available }) {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    const colorHashFunction = () => {
      const asciiValue = name ? name[0].charCodeAt() : null;
      if (!asciiValue) {
        setColorIndex(0);
      }
      setColorIndex(asciiValue % 4);
    };
    colorHashFunction();
  }, [name]);

  return (
    <div className="avatar_wrapper">
      <div className="avatar center" style={{ background: colors[colorIndex] }}>
        {img && <img src={img} alt="" />}
        {!img && <p>{name && `${name[0][0]}${name[1][0]}`}</p>}
      </div>
      <div
        className="avatar_small"
        style={available ? { background: "#e8b602" } : {}}
      ></div>
    </div>
  );
}

export default Avatar;
