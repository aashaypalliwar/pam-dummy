const express = require('express');

const app = express();

app.get('/:clientEndpoint', (req, res, next) => {
    console.log("PAM claims: " + req.params.clientEndpoint);
    res.send("PAM claims: " + req.params.clientEndpoint);
})

module.exports = app;
