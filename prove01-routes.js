const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.setHeader('ContentType', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><h1>Welcome to my page!</h1><br>');
        res.write('<form action = "/createUser" method = "POST" > <input type="text" name="username"</ input><button type="submit">Submit</button></form ></body > ');
        res.write('</html>');
        return res.end();
    }

    if (url === '/users') {

        res.setHeader('ContentType', 'text/html');
        res.write('<html>');
        res.write('<head><title>Prove01</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/createUser' && method === 'POST') {

        const userList = [];
        req.on('data', (user) => {
            console.log(user);
            userList.push(user);
        });
        return req.on('end', () => {

            const stringList = Buffer.concat(userList).toString();
            const arrayList = stringList.split('=')[1];

            fs.appendFile('users.txt', arrayList, err => {
                res.statusCode = 302; //302 stands for redirection
                res.setHeader('Location', './'); //set location for slash '/'
                return res.end();
            });
            console.log(arrayList);
        });
    }
};

module.exports = requestHandler;