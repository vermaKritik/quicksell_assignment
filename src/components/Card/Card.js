import React from "react";
import "./Card.css";
import { BsStar } from "react-icons/bs";

function Card({ data }) {
  const { id, title } = data;
  return (
    <div className="card">
      <div className="card_header">
        <p className="gray_title">{id}</p>
        <div className="card_img center">
          <img src="/img/img1.jpg" />
          {/* <p>AK</p> */}
        </div>
      </div>
      <div className="card_content">
        <p>{title}</p>
      </div>
      <div className="card_tags">
        <div className="card_tag">
          <div>
            <div></div>
          </div>
          <p>Feature Request</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
