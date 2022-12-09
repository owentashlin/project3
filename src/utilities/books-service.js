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

export async function deleteOne(bookId) {
    console.log('service log')
    await booksAPI.deleteOne(bookId)
    return (
        console.log('deleting books')
    )
}