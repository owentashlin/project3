const express = require('express')
const router = express.Router()
const booksCtrl = require('../../controllers/api/books')

router.post('/', booksCtrl.create)
router.get('/:userId/show', booksCtrl.show)

module.exports = router