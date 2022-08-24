const express = require('express');
const {join} = require('path');
const router= require('./router/getData')

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(join(__dirname, '..', 'public')));

app.use(router)

app.set('port', process.env.port || 7000);


module.exports=app

