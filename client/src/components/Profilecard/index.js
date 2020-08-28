import React from "react";
import "./style.css";
import profilePic from "../../images/profile.jpg"

function ProfileCard() {
  return (
      <div className="card" id="profile-card">
        <img id="profile-pic" src={profilePic} className="card-img-top" alt="Profile Picture" />
        <div className="card-body">
          <h5 className="card-title">Steven Johnson</h5>
          <a href="mailto: sjohnson21960@gmail.com" className="btn">Email</a>
          <a href="https://linkedin.com/in/stevenjohnson87" target="_blank" className="btn">LinkdIn</a>
          <a href="https://github.com/StevenJ87" target="_blank" className="btn">GitHub</a>
        </div>
      </div>
  );
}

export default ProfileCard;
