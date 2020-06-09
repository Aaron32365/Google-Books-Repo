import React, {useState} from "react"
import BodyHeader from "../../components/body-header/BodyHeader.js"
import SearchBar from "../../components/searchBar/SearchBar.js"
import Results from "../../components/results/Results.js"
import API from "../../utils/SearchAPI.js"

import "./search.css"

function Search (){
    
    const [search, setSearch] = useState({
        value: ""
      })

      const [books, setbooks] = useState([])
    
    function handleInputChange(event) {
        const { value } = event.target;
        setSearch({value: value})
      };


    async function onsubmit(event){
        event.preventDefault()
        if(search.value){
            const response = await API(search.value)
            console.log(response.items)
            setbooks(response.items)
        }
    }

    return(
        <div>
        <BodyHeader/>
        <SearchBar
        onsubmit={onsubmit}
        handleInputChange={handleInputChange}
        />
        <Results bookList={books}/>
        </div>
    )
}
export default Search