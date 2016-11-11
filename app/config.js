'use strict';

const test = {
	APP_ENV: 'test',
	DATABASE_URI: ':memory:'
};

const local = {
	APP_ENV: 'local',
	DATABASE_URI: 'app.db'
};

module.exports = process.env.ENV === 'local' ? local : test;
