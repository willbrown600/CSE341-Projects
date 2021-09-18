const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('ContentType', 'text/html');
    res.write('<html>');
    res.write('<head><title>Team Activity Page</title></head>');
    res.write('<body><h1>Welcome!</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(5000);