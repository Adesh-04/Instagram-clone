import React from "react";
import Storycard from "../storycard/storycard";
import "./main-area.css"
import kitten from "../../assets/story/kitten.png";
import rover from "../../assets/story/rover.jpg";
import kan from "../../assets/story/kan.png";
import leaf from "../../assets/story/leaf.jpg";
import hikari from "../../assets/story/hikari.jpg";
import red from "../../assets/story/red.jpg";
import moon from "../../assets/story/moon.jpg";
import balls from "../../assets/story/balls.jpg";
import Postcard from "../postcard/postcard";

import post1 from "../../assets/Posts/selfie.png";
import post2 from "../../assets/Posts/memes.png";
import post3 from "../../assets/story/balls.jpg";
import post4 from "../../assets/story/kitten.png";
import post5 from "../../assets/Posts/quote.png";
import post6 from "../../assets/Posts/meme2.png";


const mainarea = () =>{
    return(
        <div className="main-area">
            <div className="story-area">
                <Storycard img={kitten}  username={"cutie_03"} />
                <Storycard img={rover}   username={"Rov3r_024"}/>
                <Storycard img={kan}     username={"Kan-Saete"}/>
                <Storycard img={leaf}    username={"Aws0me"}/>
                <Storycard img={hikari}  username={"Hikari-96"}/>
                <Storycard img={red}     username={"red_121"}/>
                <Storycard img={moon}    username={"Fool-Moon"}/>
                {/* <Storycard img={balls} username={"kid"}/> */}
            </div>
            
            <div className="post-area">
                <Postcard img={red}      username={"red_121"}      post={post1} likes={'10,231'}  comments={'781'}   time={'12'} text={"Selfie Time *click* "}  />
                <Postcard img={kan}      username={"Kan-Saete"}    post={post2} likes={'30,132'}  comments={'1,099'} time={'5'}  text={"Marks Go burr...."} />
                <Postcard img={balls}    username={"Almighty_090"} post={post3} likes={'111,321'} comments={'9,321'} time={'2'}  text={"Took me 1 month to draw hope you all like it !! "}/>
                <Postcard img={kitten}   username={"cutie_03"}     post={post4} likes={'432'}     comments={'55'}    time={'6'}  text={"Good Morning to ya all !"} />
                <Postcard img={leaf}     username={"Aws0me"}       post={post5} likes={'125,431'} comments={'113'}   time={'10'} text={"Like if you agree !"} />
                <Postcard img={moon}     username={"Fool-Moon"}    post={post6} likes={'6,661'}   comments={'765'}   time={'3'}  text={"Engineering leliya hai toh bhogo"} />
            </div>
        </div>
    );
}

export default mainarea ;