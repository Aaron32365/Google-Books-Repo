import React from "react"
import "./searchBar.css"

function SearchBar (props){
    
    return(
        <div className="row justify-content-center body">
            <div className="col-10 search-container">
                <div className="col-12" id="search-header">
                     Book Search
                </div>
                <div className="col-12" id="search-sub-header">
                    Book
                </div>
                <form className="col-12" onSubmit={props.onsubmit}>
                    <input className="col" type="text" onChange={props.handleInputChange}/>
                    <button className="col-12" type="submit" id="submitBtn">Search</button>
                </form>
                
            </div>
        </div>
    )
}
export default SearchBar