import sendRequest from './send-request'

const BASE_URL = '/api/books'

export function getLibrary() {
    return sendRequest(`${BASE_URL}/library`)
}

export function addBook(bookId) {
    return sendRequest(BASE_URL, 'POST', bookId)
}

