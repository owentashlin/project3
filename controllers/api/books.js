const Book = require('../../models/book')

module.exports= {
    create
}

async function create(req, res) {
    try{
        let book = new Book(req.body)
        let user = await User.findById(req.body.user)
        user.books.push(book)
        await user.save()
        await book.save()
    }
    catch(err){
        console.log(err)
    }
}