import * as booksAPI from './books-api'

export async function saveBook(formData, book) {
    await booksAPI.saveBook(formData)
    return (
        console.log('books-service', book)
    )
}