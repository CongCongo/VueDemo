const fs = require('fs')
const path = require('path')
const Datastore = require('nedb')

var db = {}

db.shops = new Datastore()

fs.readFile(path.join(__dirname, './shop.json'), 'utf-8', (error, data) => {
    if (!error) {
        data = JSON.parse(data)
        db.shops.insert(data)
    }
})

module.exports = db