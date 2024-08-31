import React from "react";
import logo from '../assets/wired-flat-62-film.gif';


export const Logo = () => {
    return (
        <>
            <div className="logo-cont" style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "0"}}>
                <img src={logo} alt="logo" style={{height: "150px", width: "200px"}}/>
                <h1 style={{textAlign: "center", color: "#fe7b00", fontSize: "40px"}}>MOVIE <strong style={{color: "#ffffff", fontSize: "40px"}}>LAND</strong></h1> 
            </div>
        </>
    );
}

