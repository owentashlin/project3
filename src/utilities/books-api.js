import sendRequest from './send-request'

const BASE_URL = '/api/books'

export function saveBook(formData) {
    console.log(formData)
    return sendRequest(BASE_URL, 'POST', formData)
}

export function show(books) {
    console.log(books)
    return sendRequest(`${BASE_URL}/show`)
}
