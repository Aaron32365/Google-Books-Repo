import React from "react"
import SearchResults from '../../components/search-results/SearchResults.js'
import "./results.css"

function Results (props){
    return(
        <div className="row justify-content-center body" id="resultContainer">
            <div className="col-12 search-container" id="searchContainer">
                <div className="col-12" id="result-header">
                     Results
                </div>
                <div className="col">
                    <SearchResults bookList={props.bookList}/>
                </div>
            </div>
        </div>
    )
}
export default Results