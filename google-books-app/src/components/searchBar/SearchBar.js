import React from "react"
import "./searchBar.css"

function SearchBar (props){
    
    return(
        <div className="row justify-content-center body">
            <div className="col-10 box search-container">
                <div className="col-12" id="search-header">
                     Book Search
                </div>
                <div className="col-12" id="search-sub-header">
                    Book
                </div>
                <form className="col-12" onSubmit={props.onsubmit}>
                    <input className="col-12" type="text" onChange={props.handleInputChange}/>
                    <span className="row justify-content-center">
                    <button className="col-4" type="submit" id="submitBtn">Search</button>
                    </span>
                </form>
            </div>
        </div>
    )
}
export default SearchBar