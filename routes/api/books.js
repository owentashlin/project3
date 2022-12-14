const express = require('express')
const router = express.Router()
const booksCtrl = require('../../controllers/api/books')


router.post('/', booksCtrl.create)
router.get('/:id', booksCtrl.index)
router.delete('/:id', booksCtrl.deleteOne)

module.exports = router