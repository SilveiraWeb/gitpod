// servidor basico http nodejs
const http= require('http');

let server = http.createServer((req, res) => {

    console.log('URL:', req.url);
    console.log('METHOD:', req.method);

    //res.end('OK');
    switch (req.url) {
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end('<h1>RestAPI NodeJS</h1>');
            break;
        case '/users':
            res.statusCode = 200;
            res.setHeader('Content-type', 'text/html');
            res.end(JSON.stringify({
                users:[{
                    name:"Nome",
                    email:"email@email",
                    id:1
                }]
            }));
            break;
    
        default:
            break;
    }

});

server.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});