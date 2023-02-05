import React from "react";
import "./../../GUSStyle.css";

const GUSACard = function ({
  avatar,
  name,
  location,
  userName,
  bio,
  repos,
  blog,
  html_url,
  followers,
}) {
  return (
    <div className="grid-container">
      <div
        className="grid-item"
        style={{ paddingTop: "80px", paddingLeft: "10px" }}
      >
        <img src={avatar} alt="avatar-logo" height="200px" width="175px" />{" "}
      </div>
      <div className="grid-item" style={{ paddingTop: "60px" }}>
        <p>
          <span className="name">{name}</span>
          <br />
          <span className="username">ID : {userName}</span>
          <br />
          <span className="bio">❝{bio}...❞</span>
          <br />
          <span className="loc">🚩 - {location}</span>
          <br />
          <span className="loc">👱 - {followers} followers </span>
          <br />
          <span className="loc">📁 - {repos} repos</span>
          <br />
          <span className="loc">🌎 - {html_url}</span>
        </p>
      </div>
    </div>
  );
};

export default GUSACard;
