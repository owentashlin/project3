const mongoose = require('mongoose')
const Schema = mongoose.Schema

const writingSchema = new Schema ({
    body: {type: Sting}
})

module.exports = writingSchema