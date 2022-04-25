const express = require('express');

const app = express();

app.get('/:clientEndpoint', (req, res, next) => {
    console.log("PAM says: " + req.params.clientEndpoint);
    res.send("PAM says: " + req.params.clientEndpoint);
})

module.exports = app;
