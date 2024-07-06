const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());

const lessonsDirectory = '../content/';


app.get('/lesson/:id', (req, res) => {
    const lessonId = req.params.id;
    const filePath = path.join(lessonsDirectory, `${lessonId}.md`);

    // Read the content of the Markdown file
    fs.readFile(filePath, 'utf-8',(err,data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error reading file');
        } else {
            //Send the content of the Markdown file as the response
            res.send(data);
        }
    })
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});