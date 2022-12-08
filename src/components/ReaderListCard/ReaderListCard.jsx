import BookList from '../BookList/BookList';
import './ReaderCard.css'

function ReaderListCard({book}) {
    return ( 
        <>
            <div className='reader-card'>
                <div key={book} className='reader-card-info'>
                    <div><em>Title:</em> {book.title}</div>
                    <div><em>Author:</em> {book.author}</div>
                    <div><em>Genre:</em> {book.genre}</div>
                    <div><em>Status:</em> {book.status}</div>
                </div>
            </div>    
        </>
     )
}

export default ReaderListCard;