import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './BookRec.css'

const BookRec = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
            setBooks(res.data.results.books)
        }
        fetchBooks()
    }, [])

    return (
    <>
    <h3 className='NYTheader'>NYT Best Seller List: Top 15 Hardcover Fiction Recommendations</h3>
        <section className='books' >
            {books.map((book) => {
                const{author, book_image, buy_links, description, rank, title} = book

                return (
                    <article className='article' key={rank}>
                        <div>                      
                            <img src={book_image} alt={title} className='book-cover' />
                        </div>
                        <div>
                            <h3><u>{title}</u></h3>
                            <p><strong>Author: {author}</strong></p>
                            <p className='description'>{description}</p>
                            <h6><strong>Buy Now:</strong></h6>
                            <ul className='buy-links' >
                                {buy_links.map((link) =>{
                                    const {name, url} = link
                                    return (
                                    <div className='links' key={name}>
                                        <a href={url} target="_blank" rel="noreferrer">{name}</a>
                                    </div>)
                                })}
                            </ul>
                        </div>
                    </article>
                )
            })}
        </section>
    </>
    )
}

export default BookRec;




