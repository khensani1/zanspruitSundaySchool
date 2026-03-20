const express = require('express');
const router = express.Router();
const pool = require('../db'); 

router.post('/register', async (req, res) => {
    const { firstName, lastName, dob, gender, guardian } = req.body;
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // 1. Insert Guardian first
        const guardianRes = await client.query(
            `INSERT INTO guardians (first_name, last_name, phone_number, is_zcc_member) 
             VALUES ($1, $2, $3, $4) RETURNING id`,
            [guardian.firstName, guardian.lastName, guardian.phone, guardian.isZcc]
        );
        const guardianId = guardianRes.rows[0].id;

        // 2. Insert Student linked to that Guardian
        const studentRes = await client.query(
            `INSERT INTO students (guardian_id, first_name, last_name, gender, date_of_birth) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [guardianId, firstName, lastName, gender, dob]
        );

        await client.query('COMMIT');
        res.status(201).json(studentRes.rows[0]);
    } catch (err) {
        await client.query('ROLLBACK');
        res.status(500).json({ error: err.message });
    } finally {
        client.release();
    }
});