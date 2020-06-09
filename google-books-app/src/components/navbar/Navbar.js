import React from "react"
import Router, { Link } from "react-router-dom"
import "./navbar.css"
function Navbar(){

    return(
        <div className="row" id="nav">
            <div className="row">
                <div className="col-7">
                <div className="col-fluid" id="Header-main-text">
                Google Books
                </div>
                </div>
                <Link to={"/"} className="col-3">
                    Search
                </Link>
                <Link to="/save" className="col-2">
                    Save
                </Link>
            </div>
        </div>
    )
}

export default Navbar