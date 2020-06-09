import React from "react"
import Book from "../Book/Book.js"

function Saved(){
    return(
        <div className="row justify-content-center body">
            <div className="col-11 search-container" >
                <div className="col-12" id="saveHeader">
                    Saved Books
                </div>
                {/* <Book/> */}
            </div>
        </div>
    )
}

export default Saved