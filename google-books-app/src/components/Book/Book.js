import React from "react"
import "./book.css"

function Book(props){
    return(
        <div className="row bookContainer">{/*return a <book title={book.volumeInfo.title}> etc.... */}
                <div className="col-6">
                    <img src={props.img} alt={`Image of ${props.title} book cover`}/>
                        <a href={props.link} target="_blank" className="col viewLink">View</a>
                </div>
                <div className="col bookTitle">
                    {JSON.stringify(props.title)}
                    <div className="col bookAuthor">
                        By: 
                        <ul>
                        {props.authors.map(author =>{return(<li>{author},</li>)})}
                        </ul>
                    </div>
                    <form className="col btnContainer">
                        <button className="col Btn">Save</button>
                    </form>
                </div>
                <div className="col-12 bookDesc">
                    {props.description}
                </div>
            </div>
    )
}

export default Book