'use strict';

const bluebird = require('bluebird');
const sqlite = require('sqlite');

const config = require('./config');

sqlite.open(config.DATABASE_URI).then(() => {
	return sqlite.migrate({force: 'last'});
}).catch((err) => {
	console.log(err.stack);
});

module.exports = sqlite;
