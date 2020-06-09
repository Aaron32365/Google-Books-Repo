import React from "react"
import SearchResults from '../../components/search-results/SearchResults.js'
import "./results.css"

function Results (props){
    return(
        <div className="row justify-content-center body">
            <div className="col-12 search-container" id="searchContainer">
                <div className="col-12" id="result-header">
                     Results
                </div>
                <SearchResults bookList={props.bookList}/>
            </div>
        </div>
    )
}
export default Results