const express = require('express'),
	mongoose = require('mongoose');
const app = express();



require('dotenv').config();

// !DATABASE SETUP
let databaseUsername = process.env.DB_USERNAME;
let databasePassword = process.env.DB_PASS;

mongoose
	.connect(`mongodb+srv://${databaseUsername}:${databasePassword}@cluster0.mqisg9b.mongodb.net/?retryWrites=true&w=majority`)
	.then(() => console.log('DB Connected!'))
	.catch((error) => console.log(error));

	

	app.use(express.json());

	const newsRoutes = require('./routes/news');
	app.use(newsRoutes);
	
	
	
	// ! PORT SETUP
	let port = process.env.PORT;
	app.listen(port, () => {
		console.log('server started at port 3001');
	});