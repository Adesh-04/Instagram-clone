import React from "react";
import "./profile_card.css"


export default function Profile({img, username, name, button, width}){
    return(

        <div className="profile-card">
            <img src={img} width={width} height={width} alt="" />

            <div className="profile-name">
                <span className="username">{username}</span>
                <span className="name">{name}</span>
            </div>
            <button className="button">
                {button}
            </button>

        </div>
    );
}