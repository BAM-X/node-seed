'use strict';

const db = require('../db');

describe('Database', () => {
	it('should get db promise', () => {
		expect(db.then).not.toEqual(null);
	});

	it('should be able to query', (done) => {
		db.then((sqlite) => {
			sqlite.run('INSERT INTO url VALUES ("ahash", "http://redirect.url", 1, 2016-11-10)').then(() => {
				sqlite.get('SELECT * FROM url WHERE hashid = "ahash"').then((col) => {
					expect(col).toEqual({
						hashid: 'ahash',
						redirect_url: 'http://redirect.url',
						device_type: 1,
						created: 1995
					});
					done();
				});
			});
		});
	});
});
