import {useState, useEffect} from 'react'
import sendRequest from '../../utilities/send-request' 
import BookList from '../BookList/BookList'


function ReaderList({user, books, book, title, author, genre, status}) {
    const [bookList, setBookList] = useState([])

    useEffect(function(){
        async function getBookList() {
            const bookList = await sendRequest(`/api/books/${user._id}`)
            setBookList(bookList)
        }
        getBookList()
        console.log(bookList)
    }, [])

    return ( 
        <>
            <BookList user={user} books={books} book={book} title={title} author={author} genre={genre} status={status} />
        </>
     )
}

export default ReaderList;