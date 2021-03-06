import React from "react"
import { Link } from "react-router-dom"
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
                <Link to={"/"} className="col-3 nav-item">
                    Search
                </Link>
                <Link to="/save" className="col-2 nav-item">
                    Save
                </Link>
            </div>
        </div>
    )
}

export default Navbar