import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from "react"

const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=kMm3jzf527AlDFU3jqHcA3eWwySbEvpk`

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
                            {/* <Link to={buy_links._[0].url}>Link</Link> */}
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

//function BookRec (){
// const [bookList, setBookList] = useState([])
// useEffect(() => {
//     url()
// }, [])

// const url = async() => {
//     const r = await fetch('https://api.nytimes.com/svc/books/v3/lists.json')
//     setBookList(await response.json())
// }
//     function getNum(min, max) {
//         return Math.round(Math.random()*(min-max)+min)
//     }

//     let bookNum = getNum(100, 400)
//     return ( 
//         <div className="movie-card">
//             <h4>NYT Best Seller List Recommends: </h4>
//             <img src={`https://api.nytimes.com/svc/books/v3/lists.json?${bookNum}`}></img>
//         </div>
//      )
// }

export default BookRec;




