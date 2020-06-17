import React from "react"
import axios from "axios"

export default function SaveBtn(props){

    async function saveBook(event) {
        event.preventDefault()
        const book = {title: props.props.title, image: props.props.img, authors: props.props.authors, link: props.props.link, description: props.props.description}
        axios.post("/api/saveBook", book)
        .then(res => {
            console.log(res)
            props.setmsgState({message: res.data.message})
            setTimeout(() => {
                props.setmsgState({
                    message: ""
                })
            }, 3000);
        })
        .catch(err => {
            console.log("err: ",err)
            props.setmsgState({message: err.message})
        })
      }

    return(
        <form className="col btnContainer">
            <button className="col Btn" onClick={saveBook}>Save</button>
        </form>
    )
}