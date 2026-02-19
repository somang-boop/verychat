const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname, '.')));

// Fallback to index.html for SPA behavior (optional, but good for static sites)
app.get('*', (req, res) => {
    if (req.path.includes('.')) {
        res.status(404).send('Not found');
        return;
    }
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
