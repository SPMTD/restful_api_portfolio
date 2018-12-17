var mongoose = require('mongoose'),
    Schema =   mongoose.Schema();

var projectModel =  new mongoose.Schema({
    client: {
        type: String
    },
    developer: {
        type: String
    },
    description: {
        type: String
    },
    completed: {type: Boolean, default:false}
});

module.exports = mongoose.model('Project', projectModel);