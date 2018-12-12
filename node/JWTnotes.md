JWT notes


postman

npm init
npm install express and jsonwebtoken
npm install -g nodemon


const jwt = require('jsonwebtoken')

app.get('/api', (res, req) => {
	res.json({
	message: "welcome'"
	});
});

app.post('/api/posts', verifToken, (req, res) => {
	jwt.verify(req.token, 'secretkey', (err, authData) => {
		if(err) {
		res.sendStatus(403);
	} else {
		res.json({
			message: 'post created',
			authData
		});
	}
});	
});

app.post('/api/login', (req, res) => {
// mock user
const user = {
	id: 1,
	username: 'alanna',
	email: 'alanna@alannarisse.com'
}

	jwt.sign({user: user}, 'secretkey', {expiresIn: '30s'}, (err, token) => {
		res.json({
			token: token
			});
		});
});

// format of token
// authorization: Bearer <access_token>
function verifyToken(req, res, next){
	// get auth header
	const bearerHeader = req.headers['authorization'];
	// check if bearer is undefined
	if(typof bearerHeader !== 'undefined'){
		// split at the space
		const bearer = bearerHeader.split(' ');
		// get token from array
		const bearerToken = bearer[1];
		//Set the toekn
		req.token = bearerToken;
		// call next middleware
		next();
	} else {
	// Forbidden
	res.sendStatus(403);
	}
}
app.listen(5000, () => console.log('Server started on port 5000'));