const express = require('express')
const app = express()
const port = 3050

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.get("*", (req, res) => {
	res.status(200).json({
		message: "It's all good here"
	})
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
})
