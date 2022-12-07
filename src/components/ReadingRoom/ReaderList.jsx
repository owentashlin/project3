import {useState, useEffect} from 'react'
import * as booksAPI from '../../utilities/books-api'
import sendRequest from '../../utilities/send-request' 
//import axios from 'axios'

function ReaderList({user}) {
    const [books, setBooks] = useState([])
    console.log('ajax request', user)
    useEffect(function(books){
        async function getBooks() {
        const books = await sendRequest(`/api/books/${user._id}`)
        console.log(books)
    }
    getBooks()
    console.log('ajax says', books)
    }, [])

    return ( 
        <>
        <h4>Your Reading List:</h4>
        {books.map((book) => {
            const{title, author, genre, status} = book
            return(
                <div>
                    console.log('reading list')
                    <ul>
                        <li>{title}</li>
                        <li>{author}</li>
                        <li>{genre}</li>
                        <li>{status}</li>
                    </ul>
                </div>
            )
        })}
        </>
     )
}

export default ReaderList;