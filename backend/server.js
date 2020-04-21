const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", require('./app/routes'));

app.get('/ping', (req, res) => {
	res.send('pong');
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
