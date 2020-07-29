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
        <div className="col-10 col-md-8 col-lg-8 col-xl-4 box bookContainer">{/*return a <book title={book.volumeInfo.title}> etc.... */}
            <div className="row">
                <div className="col-5">
                    <div className="col-12 noPadding">
                    <img src={props.img} alt={`Image of ${props.title} book cover`}/>
                        <div  id="msg1">
                            <MessageHandler message = {msgState.message}/>
                        </div>
                        <span className="col">
                        <a href={props.link} target="_blank" className="viewLink">View</a>
                        </span>
                    </div>
                </div>
                <div className="col-7">
                    <div className="row justify-content-left bookTitle">
                        <div className="col">
                            {props.title}
                        </div>
                    </div>
                    <div className="col bookAuthor">
                        <ul>
                            {props.authors.map(author => {
                                return (<li key={author}>{author},</li>)
                            })}
                        </ul>
                    </div>
                    <div className="row">
                        <div className="col-12 bookDesc">
                            {props.description}
                        </div>
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
            </div>
                {/* <div className="col bookTitle">
                    {JSON.stringify(props.title)}
                    <div className="col bookAuthor"> //
                        By: 
                        <ul>
                        {props.authors.map(author =>{return(<li key={author}>{author},</li>)})}
                        </ul>
                    </div> //
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
                </div> */}
        </div>
    )
}

export default Book