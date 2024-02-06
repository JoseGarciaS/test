var mongoose = require('mongoose')

const Shelve = mongoose.model('Shelve', {
    id: number,
    position: String,
    categories: String,
    books: String,

})

module.exports = Shelve