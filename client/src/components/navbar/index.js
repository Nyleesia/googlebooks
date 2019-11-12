import React from "react";
import "./style.css";

const Navbar = (props) => {
  return (
    <div className = "navbar navbar-dark bg-dark">
      <a href="/googlebooks"><span className= "gameName">{props.nameHREF}</span> </a>
      {/* <span className = "score"> {`Score: ${props.score}`} </span>
      <span className = "highscore"> {`High Score: ${props.highscore}`} </span> */}
    </div>
  )
}

export default Navbar;