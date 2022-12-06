import * as booksAPI from '../utilities/books-api'

export async function saveBook(formData) {
    await booksAPI.saveBook(formData)
    return (
        console.log('books-service')
    )
}