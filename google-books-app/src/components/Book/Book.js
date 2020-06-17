import React, {useState} from "react"
import axios from "axios"
import MessageHandler from "../msgHandler/msgHandler"
import Savebtn from "../savebtn/SaveBtn"
import Deletebtn from "../deletebtn/DeleteBtn"

import "./book.css"

function Book(props){
    const [msgState, setmsgState] = useState({
        message: ""
    })
    return(
        <div className="row bookContainer">{/*return a <book title={book.volumeInfo.title}> etc.... */}
                <div className="col-6">
                    <img src={props.img} alt={`Image of ${props.title} book cover`}/>
                        <a href={props.link} target="_blank" className="col viewLink">View</a>
                        <div  id="msg1">
                        <MessageHandler message = {msgState.message}/>
                        </div>
                </div>
                <div className="col bookTitle">
                    {JSON.stringify(props.title)}
                    <div className="col bookAuthor">
                        By: 
                        <ul>
                        {props.authors.map(author =>{return(<li key={author}>{author},</li>)})}
                        </ul>
                    </div>
                    {window.location.pathname === "/save"
                    ?
                    <Deletebtn 
                    props={props}
                    setmsgState={setmsgState}
                    />
                    :
                    <Savebtn 
                    props={props}
                    setmsgState={setmsgState}
                    />
                }
                </div>
                <div className="col-12 bookDesc">
                    {props.description}
                </div>
            </div>
    )
}

export default Book