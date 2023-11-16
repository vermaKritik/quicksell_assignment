import React from "react";
import "./Card.css";
import Avatar from "../shared/Avatar/Avatar";
import { useSelector } from "react-redux";

function Card({ data, type }) {
  const { id, title, tag, userId } = data;
  const users = useSelector((state) => state.userSlice.users);
  return (
    <div className="card">
      <div className="card_header">
        <p className="gray_title">{id}</p>
        {type !== "users" && <Avatar name={users[userId].name} />}
      </div>
      <div className="card_content">
        {/* <p>{data.priority}</p> */}
        <p>{title}</p>
      </div>
      <div className="card_tags">
        {tag.map((el) => (
          <div className="card_tag">
            <div>
              <div></div>
            </div>
            <p>{el}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
