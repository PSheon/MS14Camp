var mongoose = require('mongoose'),
    dbConfig = require('../config/keys.dev.js')
mongoose.createConnection(dbConfig.mongoURI);
Schema = mongoose.Schema;


var TeamSchema = new Schema({
    team: String,
    member: Array,
    missions:Array,
    money:Number,
    items:Array
});

module.exports = mongoose.model('Team', TeamSchema);
