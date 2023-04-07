const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");

//import routes
const userRoutes = require("./routes/users");
// const favoriteRoutes = require("./routes/favorites");
// const productRoutes = require("./routes/products");

//middleware
const app = express();

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		optionsSuccessStatus: 200,
// 	})
// );

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

//models

//routes
app.use("/website/user", userRoutes);
// app.use("/products", productRoutes);
// app.use("/user", favoriteRoutes);

//server connect with db
mongoose
	.connect(
		"mongodb+srv://womenshack:womenshack@cluster0.tqatzct.mongodb.net/test",
		{ useNewUrlParser: true, useUnifiedTopology: true }
	)
	.then(() => {
		console.log("CONNECTION FOR MONGODB OPEN!!!");
	})
	.catch((err) => {
		console.log("OH NO ERROR FOR MONGODB!!!!");
		console.log(err);
	});

app.listen(4000, () => {
	console.log("Listening to port 4000");
});
