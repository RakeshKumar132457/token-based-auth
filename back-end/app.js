const express = require("express");
const User = require("./model/userModel");

const app = express();

app.get("/", async (req, res, next) => {
	try {
		const data = await User.find();
		console.log(data);

		res.status(200).json({
			status: "success",
			data: data,
		});
	} catch (err) {
		console.log(err);
	}
});

module.exports = app;
