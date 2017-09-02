const mongoose = require('mongoose');



const RoomSchema = mongoose.Schema({
	id:String,
	name: String,
	member: Array
});

module.exports = mongoose.model('Room', RoomSchema);
