const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
	aid: {
		type: Number,
		required:true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	balance: {
		type: Number,
		min: 0,
		required: true
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;