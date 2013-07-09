var fs = require( 'fs' );

var cont = fs.readFileSync( 'index.html', 'utf-8' );
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    response.send( cont );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
