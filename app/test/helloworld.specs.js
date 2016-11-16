'use strict';

const request = require('request');

describe('Default route', () => {
	it('should return hello world', (done) => {
		request.get('http://app:5000/', (error, response, body) => {
			expect(error).toEqual(null);

			expect(body).toEqual('Hello world!');
			done();
		});
	});
});
