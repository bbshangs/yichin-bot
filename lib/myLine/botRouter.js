const express = require('express');
const router = express.Router();
const middleware = require('./bot').middleware;
const eventHandler = require('./eventHandler');

router.post('/linebot/callback', middleware, (req, res) => {
    Promise
		.all(req.body.events.map(eventHandler))
		.then((result) => res.json(result))
		.catch((err) => {
		console.error(err);
		res.status(500).end();
		});
  });

module.exports = router;
