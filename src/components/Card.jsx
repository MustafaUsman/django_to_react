import React from "react";
//card to be displayed under nav bar on home page and contact page 
export const Card = () => {
    return (

        <div className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column" style={{height: "30vh"}}>
        <h2><strong><u>THE DAILY LIFE</u></strong></h2>
        <h5>CS 370 | Web & Mobile Dev</h5>
        <h5 style={{fontSize: "small"}}><i>Made w ❤ & ☕</i> © ar06246 - mu06166</h5>
        </div>
    )
};