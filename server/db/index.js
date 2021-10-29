
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://3.15.146.225:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db