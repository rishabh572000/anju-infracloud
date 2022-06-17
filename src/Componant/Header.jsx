import React from "react";
import Popup from "./Popup";
import './index.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,Routes,
    Link,
  } from "react-router-dom";

const Header = () =>{
    return(
        <>
        <div className="header_item">
        <Link to="/"><div className="header">Hello <span>{localStorage.getItem('name')}</span></div></Link>
      <Link to="/comment"><p>Comment</p></Link>
        
        
        </div>
        <Popup />
        </>
    )
}
export default Header;