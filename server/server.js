const genres = require('./data/genres.json');
const express = require('express');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());

/**
 * API Call: get genre
 */
app.get('/api/genre/:key', (req, res) => {
	const { key } = req.params;
	const genre = genres.find((genre) => genre.key === key);

	if(!genre) {
		return res.status(404).json({
			status: "failure",
			error: "Genre not found"
		});
	}

	res.status(200).json({
		status: "success",
		genre: genre
	});
});

/**
 * API Call: get genre bands
 */
app.get('/api/genre/:key/bands', (req, res) => {
	const { key } = req.params;
	const genre = genres.find((genre) => genre.key === key);

	if(!genre) {
		return res.status(404).json({
			status: "failure",
			error: "Genre not found"
		});
	}

	res.status(200).json({
		status: "success",
		bands: genre.bands
	});
});

/**
 * 404
 */
app.get('*', (req, res) => {
	res.status(404).send("404 Not Found");
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});