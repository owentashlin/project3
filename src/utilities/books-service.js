import * as booksAPI from '../utilities/books-api'

export async function saveBook(formData) {
    await booksAPI.saveBook(formData)
    return (
        console.log('books-service')
    )
}

export async function show(userId) {
    await booksAPI.show(userId)
    return (
        console.log('showing books')
    )
}