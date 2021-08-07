const neDB = require('nedb') // banco  de dados
const db = new neDB({
    filename: 'user.db',
    autoload: true
})

module.exports = (app) => {
    app.get('/users', (req, res) => {
       db.find({})
			.sort({ name: 1 })
			.exec((err, users) => {
				if (err) {
					/**
                    console.log(`error: ${err}`);
					res.status(400).json({
						error: err,
					});
                    */
                    app.utils.error.send(err, req, res);
				} else {
					res.statusCode = 200;
					res.setHeader("Content-type", "application/json");
					res.json({
						users, //users: users,
					});
				}
			});
    });
    app.post("/users", (req, res) => {
		//res.json(req.body);

		db.insert(req.body, (err, users) => {
			if (err) {
				app.utils.error.send(err, req, res);
			} else {
				res.status(200).json(users);
			}
		});
	});
    app.get('/users/admin', (req, res) => {
        //console.log('URL:', req.url);

        db.find({}).sort({name:1}).exec((err, users) => {
            if(err){
                app.utils.error.send(err, req, res);
            } else {
                res.statusCode = 200;
				res.setHeader("Content-type", "application/json");
				res.json({
					users //users: users,
				});
            }
        })
    });
};