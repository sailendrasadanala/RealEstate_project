import React from "react";
import {useNavigate} from "react-router-dom";
import "./Header.css";
const Header = () => {
   const Navigate = useNavigate();
        const handleLogout = ()=> {
            localStorage.setItem("authorization", "");
            Navigate("/");
        }
    
  const email =localStorage.getItem("email");

let username = email.slice(0,email.length-10);
    return (
        <>
        <div className="headerbody">
         <div  className="wrapper">
             <div className="logo">
                 <h2>User ID:{email}</h2>
             </div>
             <div className="right-menu">
                <nav>
                <img src="userprofile.svg" alt=""></img> 
                <h5>{username}</h5>
                <img className="menu-button" src="down.png" alt=""></img>
                </nav>
                <div className="dropdown-menu">
                  <p onClick={handleLogout}> Logout</p>

                </div>
             </div>
             </div>
             </div>
        </>
      );
    };
    export default Header;