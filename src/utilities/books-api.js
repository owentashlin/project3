import sendRequest from './send-request'

const BASE_URL = '/api/books'

export function getLibrary() {
    return sendRequest(`${BASE_URL}/library`)
}

export function addBook(formData) {
    return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

