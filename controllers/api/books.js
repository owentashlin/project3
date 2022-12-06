const Book = require('../../models/book')

module.exports= {
    create
}

async function create(req, res) {
    console.log('controller log')
    try{
        console.log(req.body)
        const book = await Book.create(req.body)
        console.log(book)
        res.json(book)
    }
    catch(err){
        console.log('controller error')
        res.status(400).json(err)
    }
}

