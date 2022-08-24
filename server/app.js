const { join } = require('path');
const express = require('express');
require('dotenv').config();
const router = require('./router');

const app = express();

app.set('port', process.env.PORT || 7000);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, '..', 'public')));

app.use('/api/v1', router);


module.exports = app;
