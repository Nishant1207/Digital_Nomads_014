const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3000;

// Middleware to handle JSON requests
app.use(express.json());

// Endpoint to start the Canva project after a successful login
app.post('/start-canva', (req, res) => {
    exec('npm run start', { cwd: 'C:/Users/dvr75/OneDrive/Desktop/project/canva' }, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error: ${error.message}`);
            return res.status(500).send('Error starting the Canva project');
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return res.status(500).send('Error starting the Canva project');
        }
        console.log(stdout);
        res.send('Canva project started successfully');
    });
});

// Start the Express server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
