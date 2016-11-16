'use strict';

const test = {
	APP_ENV: 'test',
	DATABASE_URI: ':memory:'
};

const local = {
	APP_ENV: 'local',
	DATABASE_URI: 'app.db'
};

function getCurrentConfig() {
	return process.env.APP_ENV === 'test' ? test : local;
}

module.exports = {
	test: test,
	local: local,
	getCurrentConfig: getCurrentConfig
};
