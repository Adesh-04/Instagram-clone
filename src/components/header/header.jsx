import React from 'react';
import "./header.css";
import logo from "../../assets/logo.png";
import search from "../../assets/search.svg";
import {FiHome} from "react-icons/fi";
import {RiMessengerLine} from "react-icons/ri";
import {AiOutlineCompass} from "react-icons/ai";
import {AiOutlineHeart} from "react-icons/ai";
import {FaUserCircle} from "react-icons/fa";
import {MdOutlineAddBox} from "react-icons/md";


const Header = () => {
    return (

        <div className="header">
            
            <div className="header_logo">
                <img src={logo} width="103px" height="29px" alt=""/>
            </div>

            <div className="header_search">
                <img src={search} width="16px" alt=""/>
                <input type="search" placeholder="Search"></input>
            </div>

            <div className="header_icons">
                <FiHome className="header-icon" />
                <RiMessengerLine className="header-icon"/>
                <MdOutlineAddBox className="header-icon" />
                <AiOutlineCompass className="header-icon"/>
                <AiOutlineHeart className="header-icon" />
                <FaUserCircle className="header-icon" />
            </div>
        </div>
    )
}
export default Header;