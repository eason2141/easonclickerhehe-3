const express = require('express');
const app = express().use(require('cors')());

const path = require('path')
app.use(express.static(path.join(__dirname, "public")))

const Enmap = require('enmap');
const db = new Enmap({
	name: "db"
});
db.ensure("clicks", 0);

app.get('/api/click', (req, res) => {
	db.math("clicks", "+", 1);
	res.send("hello world")
})

app.get('/api/clicks', (req, res) => {
	res.send({
		clicks: db.get("clicks")
	})
})

app.listen(6969, () => console.log("Listening."))