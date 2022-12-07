const book = require('../../models/book')
const Book = require('../../models/book')

module.exports= {
    create,
    show
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

async function show(req, res) {
    console.log(req.params.id)
    const response = await Book.find({user:req.params.id})
    console.log(response)
}

