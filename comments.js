// Create web server
const express = require('express');
const app = express();

// Create a new comment
app.post('/comments', (req, res) => {
    res.send('You have sent a POST request');
});

// Read all comments
app.get('/comments', (req, res) => {
    res.send('You have sent a GET request');
});

// Update a comment
app.put('/comments/:id', (req, res) => {
    res.send('You have sent a PUT request');
});

// Delete a comment
app.delete('/comments/:id', (req, res) => {
    res.send('You have sent a DELETE request');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});