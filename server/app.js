const express = require('express');
const { join } = require('path');
const router = require('./router');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api/v1', router);

app.set('port', process.env.port || 7000);

module.exports = app;
