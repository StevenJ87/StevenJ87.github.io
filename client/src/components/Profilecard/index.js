import React from "react";
import "./style.css";
import profilePic from "../../images/profile.jpg"
import {ExternalLink} from "react-external-link"

function ProfileCard() {
  return (
      <div className="card" id="profile-card">
        <img id="profile-pic" src={profilePic} className="card-img-top" alt="Profile" />
        <div className="card-body">
          <h5 className="card-title">Steven Johnson</h5>
          <ExternalLink href="mailto: sjohnson21960@gmail.com" className="btn">Email</ExternalLink>
          <ExternalLink href="https://linkedin.com/in/stevenjohnson87" className="btn">LinkedIn</ExternalLink>
          <ExternalLink href="https://github.com/StevenJ87" className="btn">GitHub</ExternalLink>
        </div>
      </div>
  );
}

export default ProfileCard;
