import AddBook from '../../components/AddABookForm/AddABookForm'
import BookRec from '../../components/BookRec/BookRec';
import './Library.css'

function LibraryPage() {
    return ( 
        <>
        <h1>Library</h1>
        <AddBook />
        <BookRec />
        </>
     );
}

export default LibraryPage;