import React from "react";
import Profile from "../Profile_card/profile_card.jsx";
import "./sidebar.css"
import kitten from "../../assets/story/kitten.png"


const sidearea = () =>{
    return(
        <div className="sidebar">
            <div className="profile-position">
                <Profile img={kitten} username={"Kan-Saete"} name={"cutie "} button={"Switch"} width={"55px"} />
            </div>
            <div className="suggestion">
                <span>Suggestions for you</span>
                <button className="link point">See All</button>
            </div>

            <div className="profile-suggested">
                <Profile img={kitten} username={"Rov3r_024"} name={"Followed by Aws0me "} button={"Follow"} width={"30px"}  />
                <Profile img={kitten} username={"Kan-Saete"} name={"Followed by Rov3r_024 "} button={"Follow"} width={"30px"}  />
                <Profile img={kitten} username={"Hikari-96"} name={"New to instagram "} button={"Follow"} width={"30px"}  />
                <Profile img={kitten} username={"Aws0me"} name={"Suggested for you "} button={"Follow"} width={"30px"}  />
                <Profile img={kitten} username={"red_121"} name={"Suggested for you "} button={"Follow"} width={"30px"}  />
            </div>

            <div className="side-link">

            About . Help . Press . API . Jobs . Privacy . Terms . Locations . Top . Accounts . Hashtags . Language . 
            English
            <br/>
            <br />

            <span>© 2021 INSTAGRAM FROM META </span>

            </div>

            </div>

            
        
    );
}

export default sidearea ;