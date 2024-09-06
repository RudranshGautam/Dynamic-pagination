const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

// Middleware to check if the user is authenticated
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/auth/login');
}

router.get('/', isAuthenticated, expenseController.getExpensePage);
router.get('/data', isAuthenticated, expenseController.getExpenseData);

module.exports = router;
