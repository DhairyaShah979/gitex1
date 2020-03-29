const mongoose = require('mongoose');

const co = new mongoose.Schema({
    firstname: {type: String, required:true},
    lastname: {type: String, required:true}
});

module.exports = mongoose.model('Document', co);

//this page is for schema of our table
