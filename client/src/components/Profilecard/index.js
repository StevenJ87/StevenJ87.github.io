import React from "react";
import "./style.css";
import profilePic from "../../images/20200326_115819.jpg"

function ProfileCard() {
  return (
    <div className="col-sm-2">
      <div className="card" id="profile-card">
        <img id="profile-pic" src={profilePic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Steven Johnson</h5>
          <a href="mailto: sjohnson21960@gmail.com" style="width: 50%" className="btn">Email</a>
          <a href="https://linkedin.com/in/stevenjohnson87" target="_blank" style="width: 50%" className="btn">LinkdIn</a>
          <a href="https://github.com/StevenJ87" target="_blank" style="width: 50%" className="btn">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
