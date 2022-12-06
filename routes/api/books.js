const express = require('express')
const router = express.Router()
const booksCtrl = require('../../controllers/api/books')

router.post('/', booksCtrl.create)

module.exports = router