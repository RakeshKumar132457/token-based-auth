const mongoose = require("mongoose");

const app = require("./app");

mongoose
	.connect("mongodb://127.0.0.1:27017/user-reg", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Database Successfully Connected");
	});

app.listen(3000, () => {
	console.log("Server Listening on http://127.0.0.1:3000");
});
