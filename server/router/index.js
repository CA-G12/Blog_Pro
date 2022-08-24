const router = require('express').Router();

const { postHandler } = require('../controllers');

router.post('/post', postHandler);

module.exports = router;
