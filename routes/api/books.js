const express = require('express')
const router = express.Router()
const booksCtrl = require('../../controllers/api/books')

router.post('/books/:id', booksCtrl.create)

module.exports = router