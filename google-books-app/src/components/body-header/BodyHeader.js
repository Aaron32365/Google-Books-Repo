import React from "react"
import "./bodyHeader.css"

function BodyHeader (){
    return(
        <div className="row justify-content-center" id="header">
            <div className="col-11 containers">
                <div className="row justify-content-center headers">
                    Google Books Search
                </div>
                <div className="row justify-content-center sub-headers-1">
                    Search for and save books of interest
                </div>
            </div>
        </div>
    )
}
export default BodyHeader