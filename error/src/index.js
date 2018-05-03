"use strict";
exports.__esModule = true;
var request = require("superagent");
request
    .get('/demo')
    .end(function (err, res) {
    // code
});
