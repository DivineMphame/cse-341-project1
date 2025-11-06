const router = require('express').Router();

//this is to Define my routes here
router.get('/', (req, res) => {res.send('Hello World!');});

module.exports = router;