const express = require('express');
const router = express.Router();
const pool = require('../db'); // Import your database connection

// PASTE YOUR CODE HERE
router.get('/stats/weekly', async (req, res) => {
    try {
        const result = await pool.query(`
            SELECT attendance_date, COUNT(*) as total_present 
            FROM attendance 
            WHERE status = 'Present' AND category = 'Student'
            GROUP BY attendance_date 
            ORDER BY attendance_date DESC 
            LIMIT 8
        `);
        res.json(result.rows);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router; // Export it so index.js can use it