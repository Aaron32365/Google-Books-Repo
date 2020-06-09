
async function API(book){
    const queryString = ``
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data
    });
    return response
    /* const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}`, {
            method: 'GET',
            credentials: 'same-origin'
        });
        const exam = await response.json();
        return exam;*/
}

export default API