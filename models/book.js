var mongoose = require('mongoose')

const Book = mongoose.model('Book', {
    id: Number,
    name: String,
    author: String,
    numPages: Number,
    datePublished: Date,
    editorial: String,
    ISBN: Number,
    genre: String,
    comments: String,
    edition: Number
})

module.exports = Book