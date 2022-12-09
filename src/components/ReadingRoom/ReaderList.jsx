import {useState, useEffect} from 'react'
import sendRequest from '../../utilities/send-request' 
import BookList from '../BookList/BookList'


function ReaderList({user}) {
    const [bookList, setBookList] = useState([])

    useEffect(function(){
        async function getBookList() {
            const books = await sendRequest(`/api/books/${user._id}`)
            setBookList(books)
        }
        getBookList()
    }, [])

    return ( 
        <>
            <BookList user={user} bookList={bookList}/>
        </>
     )
}

export default ReaderList