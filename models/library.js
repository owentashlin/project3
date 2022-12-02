const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bookSchema = require('./book')

const librarySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    books: [bookSchema]
})

module.exports = mongoose.model('Library', librarySchema)
