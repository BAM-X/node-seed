'use strict';

const configs = require('../config');

describe('Config', () => {
	it('should get local', () => {
		process.env.APP_ENV = 'local';
		expect(configs.getCurrentConfig()).toEqual(configs.local);
	});

	it('should get test', () => {
		process.env.APP_ENV = 'test';
		expect(configs.getCurrentConfig()).toEqual(configs.test);
	});
});
