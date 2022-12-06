import {useState, useEffect} from 'react'
import axios from 'axios'

function ReaderList() {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://localhost3000/api/books/show`)
            setBooks(res.data.results.books)
        }
    }, [])

    return ( 
        <>
        <h4>Your Reading List</h4>
        {books.map((book) => {
            const{title, author, genre, status} = book
            return(
                <div>
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
     console.log('reading list')
}

export default ReaderList;