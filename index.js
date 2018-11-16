const express = require('express')
const thingy = require('./thingy')
var app = express()

app.get("/", function(req, res) {

	res.status(200).json(thingy.doThatShit())

})

app.listen(8080, function() {
	console.log("Started")

})
