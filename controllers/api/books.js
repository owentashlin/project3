const Book = require('../../models/book')

module.exports= {
    create,
    index
}

async function create(req, res) {
    try{
        const book = await Book.create(req.body)
        res.json(book)
    }
    catch(err){
        res.status(400).json(err)
    }
}

async function index(req, res) {
    const bookList = await Book.find({user: req.params.id})
    res.json(bookList)
}


