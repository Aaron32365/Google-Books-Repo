import React from "react"
import "./searchResults.css"
import Book from "../Book/Book.js"

function SearchResults (props){
    const BookList = props.bookList.map(book => {
        return(
            <Book title={book.volumeInfo.title}
            img={book.volumeInfo.imageLinks.thumbnail}
            description={book.volumeInfo.description}
            authors={book.volumeInfo.authors}
            link={book.volumeInfo.previewLink}
            />
        )
    })
    return(
        <div className="col ">
            {/* {JSON.stringify(props.bookList)/* use map to return jsx for each booklist item */}
            {BookList}
        </div>
    )
}
export default SearchResults