import sendRequest from './send-request'

const BASE_URL = '/api/books'

export function saveBook(formData) {
    return sendRequest(BASE_URL, 'POST', formData)
}

export function show(userId) {
    return sendRequest(`${BASE_URL}/${userId}`)
}

export function deleteOne(bookId){
    console.log('books api')
    return sendRequest(`${BASE_URL}/${bookId}`)
}