var fs = require( 'fs' );

var indexFile;
var cont = fs.readFileSync( 'index.html' );
var buffer = new Buffer( indexFile, 'utf8' );
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send( cont );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
