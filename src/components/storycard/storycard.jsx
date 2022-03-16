import React from "react";
import "./storycard.css"



export default function storycard({img ,username}) {
    return(
        <div className="storycard">
            
            <img className="storyimg" src={img} width="55px" height="55px" alt="story" />

            <center className="name">
                <p>{username}</p>
            </center>

        </div>
    );
}

