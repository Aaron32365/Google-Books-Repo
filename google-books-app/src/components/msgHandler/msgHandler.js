import React from "react"
import "./msgHandler.css"
export default function Message(props){
    
    return(
        <div className="col-12 messages">
            {props.message}
        </div>
    )
}