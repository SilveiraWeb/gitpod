
module.exports = (app) => {
    app.get('/users', (req, res) => {
        console.log('URL:', req.url);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users:[{
                id:1,
                name:"User",
                email:"user@email",
            }]
        });
    });
    app.get('/users/admin', (req, res) => {
        console.log('URL:', req.url);
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json');
        res.json({
            users:[{
                id:1,
                name:"Admin",
                email:"admin@email",
            }]
        });
    });
};