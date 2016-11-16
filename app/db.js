'use strict';

const sqlite = require('sqlite');

const configs = require('./config');
const config = configs.getCurrentConfig();

let promise = sqlite.open(config.DATABASE_URI).then((db) => {
	return sqlite.migrate({force: 'last'});
}, (err) => {
	console.log(err.stack);
});

module.exports = promise;
