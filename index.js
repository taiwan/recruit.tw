require('dotenv').config();

const http = require('http');
const postgraphql = require('postgraphql').postgraphql;

http.createServer(
	postgraphql({
		user: process.env.DB_USER,
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		password: process.env.DB_PASS,
		port: process.env.DB_PORT,
	}, {
		graphiql: process.env.NODE_ENV === 'development'
	})
).listen(3000);
