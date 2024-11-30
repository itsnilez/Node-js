const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get('/', (req, res) => {
    res.send('Server is running!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});