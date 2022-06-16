import React from "react";
import Popup from "./Popup";

const Header = () =>{
    return(
        <>
        <h2>Hello {localStorage.getItem('name')}</h2>
        <Popup />
        </>
    )
}
export default Header;