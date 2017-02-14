const express = require('express');
const AlgorithmController = require('../controllers/AlgorithmController');
var router = express.Router();

function ensureLocalAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.json({
        error: 'Not authenticated!'
    });
}

//router.use(ensureLocalAuthenticated);

router.post('/combSort', AlgorithmController.combSort);
router.post('/quickSort', AlgorithmController.quickSort);

module.exports = router;

