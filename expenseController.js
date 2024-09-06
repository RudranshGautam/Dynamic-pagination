const path = require('path');
const db = require('../db');

exports.getExpensePage = async (req, res) => {
    const userId = req.session.user.id;
    try {
        res.sendFile(path.join(__dirname, '../public/expenses.html'));
    } catch (err) {
        console.error('Error fetching expenses:', err);
        res.status(500).send('Error fetching expenses. Please try again.');
    }
};

exports.getExpenseData = async (req, res) => {
    const userId = req.session.user.id;
    const { limit = 10 } = req.query; // Default is 10 if no limit is provided
    try {
        const [expenses] = await db.execute(`
            SELECT id, amount, description, category 
            FROM expenses 
            WHERE user_id = ?
            LIMIT ?
        `, [userId, parseInt(limit)]);

        res.json(expenses);
    } catch (err) {
        console.error('Error fetching expenses data:', err);
        res.status(500).send('Error fetching expenses data. Please try again.');
    }
};
