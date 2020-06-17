import React from "react"
import axios from "axios"

export default function DeleteBtn(props){

    async function deleteBook(event) {
        event.preventDefault()
        console.log(props)
        const book = props.props.title
        console.log(book)
        axios.post(`/api/deleteBook`, {book: book})
        .then(res => {
            console.log(res)
            props.setmsgState({message: res.data.message})
            setTimeout(() => {
                props.setmsgState({
                    message: ""
                })
                window.location.reload()
            }, 3000);
        })
        .catch(err => {
            console.log("err: ",err)
            props.setmsgState({message: err.message})
        })
      }

    return(
        <form className="col btnContainer">
            <button className="col Btn" onClick={deleteBook}>Delete</button>
        </form>
    )
}