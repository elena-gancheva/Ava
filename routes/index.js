const express = require('express');
const UserController = require('../controllers/user-controller');
const path = require('path');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res){
    res.sendFile(path.join(__dirname+'/../src/app.html'));
});

/* POST users listing. */
router.post('/login', UserController.login);
router.post('/register', UserController.register);

module.exports = router;
