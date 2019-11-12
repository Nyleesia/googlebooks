import React from "react";
import "./style.css";

const Jumbotron = ({ children }) => {
  return (
    <div className = "jumbotron">
      <div className = ""> {children}
      </div>
    </div>
  )
}

export default Jumbotron;