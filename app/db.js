'use strict';

const sqlite = require('sqlite3');

const config = require('./config');

const db = new sqlite.DataBase(config.DATABASE_URI);
