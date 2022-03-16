import React from "react";
import "./postcard.css";
import {BsThreeDots} from "react-icons/bs"
// import post from "../../assets/Posts/selfie.png";
// import {FaUserCircle} from "react-icons/fa";
import {AiOutlineHeart} from "react-icons/ai";
import {BiMessageRounded} from "react-icons/bi";
import {TiLocationArrowOutline} from "react-icons/ti";
import {BsBookmark} from "react-icons/bs";
import {BsEmojiLaughing} from "react-icons/bs";

export default function postcard({img, username, post, likes, comments, time, text }) {
    return(
        <div className="postcard">
            <div className="post-header">

                <img className="storyimg"  src={img} width="30px" height="30px" alt="story" />
        
                <p> {username} </p>

                <span>
                    <BsThreeDots />
                </span>
            </div>

                <img src={post} width="100%" height="20%" alt="" />

            <div className="post-footer">
                <div className="post-like">
                    <div className="post-like-content">

                        <AiOutlineHeart className="point"/>
                        <BiMessageRounded className="point"/>
                        <TiLocationArrowOutline className="point"/>
                    </div>

                    <BsBookmark className="point"/>
                </div>

                <div className="post-info">
                    <p className="heavier-text point"><b>{likes} likes</b></p>
                    <span><b className="heavier-text point">{username} </b></span>
                    <span className="text"> {text}</span><br/>
                    <span className="lighter-text point">View all {comments} comments</span><br/>
                    <p className="time">{time} HOURS AGO</p>
                </div>

                <div className="post-comment">
                    <BsEmojiLaughing />
                    <input placeholder="Add a comment.."></input>
                    <button>Post</button>
                </div>
            </div>
        </div>
    );
}