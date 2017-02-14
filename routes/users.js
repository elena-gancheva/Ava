const express = require('express');
const UserController = require('../controllers/UserController');
var router = express.Router();

function ensureLocalAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({
        error: 'Not authenticated!',
    });
}

router.use(ensureLocalAuthenticated);

router.get('/logout', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/addFriend', function(req, res, next) {
    let user = req.user;

    res.send(user);
});

module.exports = router;
