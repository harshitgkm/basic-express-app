	const express = require("express");

	const app = express();

	const port = process.env.PORT ||  3000;


	app.get("/health", (req,res)=>{
		res.send("Testing!");
	})

	app.listen(port, ()=> {
		console.log(`Listenning to port no. ${port}`);

	})