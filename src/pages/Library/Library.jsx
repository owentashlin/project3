import AddBook from '../../components/AddABookForm/AddABookForm'
import BookRec from '../../components/BookRec/BookRec'
import ReaderList from '../../components/ReadingRoom/ReaderList';
import './Library.css'

function LibraryPage({user}) {
    return ( 
        <>
        <h1>Library</h1>
        <AddBook user={user}/>
        <ReaderList user={user} />
        <BookRec />
        </>
     );
}

export default LibraryPage;