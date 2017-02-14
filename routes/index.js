const express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res){
    res.render('home');
});

/* POST users listing. */
router.post('/login', UserController.login);
router.post('/register', UserController.register);


module.exports = router;
