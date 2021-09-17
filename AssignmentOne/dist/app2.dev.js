"use strict";

var http = require('http'); //const routes = require('./routes2');


var server = http.createServer(function (req, res, next) {
  var url = req.url;

  if (url === '/') {
    res.setHeader('ContentType', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><form action="/createUser" method="POST"><input type="text" name="username"</input><button type="submit">Submit</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/users') {
    res.setHeader('ContentType', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment 1</title></head>');
    res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/createUser') {
    var body = [];
    req.on('data', function (chunk) {
      body.push(chunk);
    });
    req.on('end', function () {
      var parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split("=")[1]);
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    res.end();
  }
});
server.listen(3000);