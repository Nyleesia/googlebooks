import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div id = "navbar">
      <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/">
                <h2 className="text-white">Google API Book Search</h2>
            </a>
            <div id="navBar">
                <ul className="navbar-nav">
                    <li className="nav-item" id="home">
                        <a className="nav-link" href="/">
                            <button type="button" className="btn btn-info text-white">Search</button>
                        </a>
                    </li>
                    <li className="nav-item" id="library">
                        <a className="nav-link" href="/saved">
                            <button type="button" className="btn btn-warning text-white">Library</button>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;