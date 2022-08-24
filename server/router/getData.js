const router = require('express').Router();
const getDataController= require('../controllers/getData')

router.get('/posts', getDataController);

module.exports=router