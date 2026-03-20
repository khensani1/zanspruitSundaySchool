router.post('/mark-sunday', async (req, res) => {
    const { date, records } = req.body; // records: [{id: 1, type: 'Student', status: 'Present'}, ...]
    
    try {
        const queries = records.map(record => {
            return pool.query(
                `INSERT INTO attendance (attendance_date, student_id, staff_id, status, category) 
                 VALUES ($1, $2, $3, $4, $5)`,
                [
                    date, 
                    record.type === 'Student' ? record.id : null, 
                    record.type === 'Staff' ? record.id : null, 
                    record.status, 
                    record.type
                ]
            );
        });

        await Promise.all(queries);
        res.status(200).send("Attendance recorded successfully");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});