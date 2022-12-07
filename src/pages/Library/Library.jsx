import AddBook from '../../components/AddABookForm/AddABookForm'
import BookRec from '../../components/BookRec/BookRec'
import ReaderList from '../../components/ReadingRoom/ReaderList';
import './Library.css'

function LibraryPage({user, books, book, title, author, genre, status}) {
    return ( 
        <>
        <h1>Library</h1>
        <AddBook user={user}/>
        <ReaderList user={user} books={books} book={book} title={title} author={author} genre={genre} status={status}/>
        {/* <BookRec /> */}
        </>
     );
}

export default LibraryPage;