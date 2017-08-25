const mongoose = require('mongoose');



const TeamSchema = mongoose.Schema({
    team: String,
    member: Array,
    missions:Array,
    money:Number,
    items:Array
});

module.exports = mongoose.model('Team', TeamSchema);
