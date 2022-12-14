const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema ({
    title: {type: String, required: true},
    author: {type: String},
    genre: {type: String},
    status: {type: String},
    user: {type: String}
})

module.exports = mongoose.model('Book', bookSchema)