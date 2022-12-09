const Book = require('../../models/book')

module.exports= {
    create,
    index,
    deleteOne
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

async function deleteOne (req, res) {
    console.log(req.params.id)
    let book = await Book.findOneAndDelete({_id: req.params.id})
}
