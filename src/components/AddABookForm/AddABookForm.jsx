import {useState} from "react"
import { saveBook } from "../../utilities/books-service"

function AddBook({formData}) {
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        status: ''
    })

    const handleChange= (event) => {
        setBook({...book, [event.target.name]:event.target.value})
    }

    const handleSubmit = async function(event) {
        event.preventDefault()
        console.log('form', book)
        await saveBook()
        //setBook({title:'', author:'', genre:'', status:''})

    }

    return ( 
        <>
        <h3>Add A Book to Your Library</h3>
        <form autoComplete='off' onSubmit={handleSubmit}>
            <label>Title: </label>
            <input type='text' name='title' value={book.title} onChange={handleChange} required/>
            &nbsp;
            <label>Author: </label>
            <input type='text' name='author' value={book.author} onChange={handleChange} required/>
            &nbsp;
            <label>Genre: </label>
            <select name='genre' value={book.genre} onChange={handleChange} required>
                <option value=''></option>
                <option value='romance'>Romance</option>
                <option value='history'>History</option>
                <option value='fantasy'>Fantasy</option>
                <option value='sci-fi'>Sci-Fi</option>
                <option value='urban-fantasy'>Urban Fantasy</option>
                <option value='horror'>Horror</option>
                <option value='mystery'>Mystery</option>
                <option value='non-fiction'>Non-Fiction</option>
            </select>
            &nbsp;
            <label>Status: </label>
            <select name='status' value={book.status} onChange={handleChange} required>
                <option value='to-read'>On the Pile</option>
                <option value='finished'>Finished</option>
            </select>
            &nbsp;
            <button type='submit' value='Submit'>Add to Library</button>
        </form>
        </>    
     )
}

export default AddBook