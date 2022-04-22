const express = require('express');

const app = express();

app.get('/:clientEndpoint', (req, res, next) => {
    res.send("pam says: !! " + req.params.clientEndpoint);
})

module.exports = app;
