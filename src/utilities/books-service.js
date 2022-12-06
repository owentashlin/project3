import * as booksAPI from '../utilities/books-api'

export async function saveBook(formData) {
    console.log('books-service pre-await')
    await booksAPI.saveBook(formData)
    return (
        console.log('books-service')
    )
}