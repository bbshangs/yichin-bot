const express = require('express');
const botRouter = require('./lib/myLine/botRouter');

var app = express();
const port = process.env.PORT || 3000;

app.use(botRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});

module.exports = app;