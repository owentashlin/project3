
import './ReaderCard.css'



function ReaderListCard({book, setBook}) {
    
    const handleDelete = async () => {
        console.log('delete', {book})
        const response = await fetch(`/book/${book}`, {
            method: 'DELETE'
        }).then(res => res.json())
        setBook(response.book)
    }

    return ( 
        <>
            <div className='reader-card'>
                <div className='reader-card-info'>
                    <div><em>Title:</em> {book.title}</div>
                    <div><em>Author:</em> {book.author}</div>
                    <div><em>Genre:</em> {book.genre}</div>
                    <div><em>Status:</em> {book.status}</div>
                <button className='delete-button' onClick={handleDelete}>delete</button>
                </div>
            </div>    
        </>
     )
}

export default ReaderListCard;