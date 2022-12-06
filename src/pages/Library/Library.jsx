import AddBook from '../../components/AddABookForm/AddABookForm'
import BookRec from '../../components/BookRec/BookRec'
import ReaderList from '../../components/ReadingRoom/ReaderList';
import './Library.css'

function LibraryPage() {
    return ( 
        <>
        <h1>Library</h1>
        <AddBook />
        <ReaderList />
        <BookRec />
        </>
     );
}

export default LibraryPage;