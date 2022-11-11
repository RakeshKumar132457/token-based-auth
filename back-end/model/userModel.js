const mongoose = require("mongoose");

const reg = mongoose.Schema(
	{
		firstName: {
			type: String,
			required: [true, "First Name is required"],
		},
		lastName: {
			type: String,
			required: [true, "Last Name is required"],
		},

		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		mobileNo: {
			type: Number,
			required: [true, "Mobile number is required"],
		},

		password: {
			type: String,
			required: [true, "Password is required"],
		},

		address: {
			type: String,
			required: [true, "Address is required"],
		},
	},
	{ collection: "users" }
);

const User = mongoose.model("User", reg);

module.exports = User;
