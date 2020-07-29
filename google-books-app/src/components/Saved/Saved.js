import React, {useState, useEffect} from "react"
import Book from "../Book/Book.js"
import axios from "axios"
import "./saved.css"

function Saved(){
    const [savedBooksState, setsavedBooksState] = useState()
    useEffect( () => {
        axios.get("/api/savedBooks")
        .then(res => {
            const bookList = res.data
            console.log(bookList)
            const SavedBooks = bookList.map(book => {
                return (
                    <Book key={book.title} title={book.title}
                    img={book.image}
                    description={book.description}
                    authors={book.authors}
                    link={book.link}
                    />
                )
            })
            setsavedBooksState(SavedBooks)

        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return(
        <div className="row justify-content-center body">
            <div className="col-12 savedContainer search-container" >
                <div className="col-12" id="saveHeader">
                    Saved Books
                </div>
                <div className="row justify-content-center">
                {savedBooksState}
                </div>
            </div>
        </div>
    )
}

export default Saved