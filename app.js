/**
 * Created by borga on 17/08/16.
 */
var express = require('express');
var app = express();

// Serve up content from public directory
app.use(express.static(__dirname + '/'));

app.listen(process.env.PORT || 3000);