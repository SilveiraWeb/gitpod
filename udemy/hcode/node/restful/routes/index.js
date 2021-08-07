
module.exports = (app) => {
    app.get('/', (req, res) => {
        console.log('URL:', req.url);
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.end('<h1>RestAPI NodeJS</h1>');
    });
};


