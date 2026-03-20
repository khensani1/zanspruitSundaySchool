const express = require('express');
const cors = require('cors');

const app = express();

// Middleware (The "Security Guard" and "Translator")
app.use(cors()); // Allow React to talk to us
app.use(express.json()); // Allow us to read JSON data sent to us

// A test route to see if it works
app.get('/test', (req, res) => {
    res.send("The Sunday School Server is Alive!");
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});