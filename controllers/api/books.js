const Book = require('../../models/book')

module.exports= {
    create
}

async function create(req, res) {
    try{
        let book = await Book.create(req.body)
        let user = await User.findById(req.body.user)
        user.books.push(book)
        res.json(book)
        console.log('controller', book)
    }
    catch(err){
        res.status(400).json(err)
    }
}