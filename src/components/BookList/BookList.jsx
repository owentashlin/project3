import ReaderListCard from "../ReaderListCard/ReaderListCard";

function BookList({bookList}) {
    const readerList = bookList.map(book => {
        return <ReaderListCard book={book}/>
    })
        
    return ( 
        <>
        <h4>Your Reading List:</h4>
        {readerList}
        </>
     )
    }
export default BookList;
