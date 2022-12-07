const Book = require('../../models/book')

module.exports= {
    create,
    index
}

async function create(req, res) {
    console.log('controller log')
    try{
        console.log(req.body)
        const book = await Book.create(req.body)
        res.json(book)
    }
    catch(err){
        console.log('controller error')
        res.status(400).json(err)
    }
}

async function index(req, res) {
    console.log("index", req.params.id)
    const bookList = await Book.find({user: req.params.id})
    console.log("after index", bookList)
    res.json(bookList)
}


