import React, {useState, useEffect} from 'react'
import axios from 'axios'

const BookRec = () => {
    const [books, setBooks] = useState([])
    
    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_BOOKS_API_KEY}`)
            setBooks(res.data.results.books)
            console.log(res.data.results.books)
        }
        fetchBooks()
    }, [])

    return (
    <>
    <h3>NYT Best Seller List: Top 15 Hardcover Fiction Recommendations</h3>
        <section>
            {books.map((book) => {
                const{author, book_image, buy_links, description, rank, title}  = book

                return (
                    <article key={rank}>
                        <div>                      
                            <img src={book_image} alt={title}/>
                        </div>
                        <div>
                            <h3><u>{title}</u></h3>
                            <p><strong>Author: {author}</strong></p>
                            <p>{description}</p>
                            <p><strong>Buy Now:</strong></p>
                            <ul>
                                {buy_links.map((link) =>{
                                    const {name, url} = link
                                    return (
                                    <div key={name}>
                                        <a href={url} target="_blank">{name}</a>
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




