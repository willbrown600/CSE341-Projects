"use strict";

var fs = require('fs');

var requestHandler = function requestHandler(req, res) {
  var url = req.url;
  var method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Hello There Friend!</title></head>');
    res.write('<body><h1>Hello there!</h1></body>');
    res.write('<form action="/users" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  } //console.log(req.url, req.method, req.headers);


  if (url === '/users' && method === 'POST') {
    var body = [];
    req.on('data', function (chunk) {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on('end', function () {
      var parsedBody = Buffer.concat(body).toString();
      var users = parsedBody.split('=')[1];
      fs.writeFile('users.txt', users, function (err) {
        res.statusCode = 302; //302 stands for redirection

        res.setHeader('Location', './'); //set location for slash '/'

        return res.end();
      });
      console.log(users);
    });
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<head><title>My first Page</title></head>');
  res.write('<body><h1>Hello there Friend, Are you lost?</h1></body>');
  res.write('</html>');
  res.end();
};

module.exports = requestHandler;