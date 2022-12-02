const express = require('express')
const router = express.Router()
const booksCtrl = require('../../controllers/api/books')

// router.get('/library', booksCtrl.show)
router.post('/', booksCtrl.create)

module.exports = router