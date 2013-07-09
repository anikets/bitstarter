var fs = require( 'fs' );

var indexFile;
fs.readFile( 'index.html', function( err, data ) {
    if ( err ) throw err;
    indexFile = data;
});
var buffer = new Buffer( indexFile, 'utf-8' );
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
//  response.send('Hello World 2!');
    response.send( buffer );
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
