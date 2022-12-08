import {useState} from "react"
import * as bookApi from "../../utilities/books-api"
import './AddABookForm.css'

function AddBook({user}) {
    console.log(user)
    const [book, setBook] = useState({
        title: '',
        author: '',
        genre: '',
        status: '',
        user: `${user._id}`
    })

    const handleChange= (event) => {
        setBook({...book, [event.target.name]:event.target.value})
    }
    
    const handleSubmit = async function(event) {
        //event.preventDefault()
        console.log('form', book)
        await bookApi.saveBook(book)
        setBook({title:'', author:'', genre:'', status:'', user:''})
    }

    return ( 
        <>
        <h3>Add A Book to Your Library</h3>
        <form className='add-book' autoComplete='off' onSubmit={handleSubmit}>
            <label>Title: </label>
            <input className='title' type='text' name='title' value={book.title} onChange={handleChange} required/>
            <br></br>
            <label>Author: </label>
            <input className='author' type='text' name='author' value={book.author} onChange={handleChange} required/>
            <br></br>
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
            <br></br>
            <label>Status: </label>
            <select name='status' value={book.status} onChange={handleChange} required>
                <option value='to-read'>On the Pile</option>
                <option value='finished'>Finished</option>
            </select>
            <br></br>
            <button type='submit' value='Submit'>Save to Reading List</button>
        </form>
        </>    
     )
}

export default AddBook