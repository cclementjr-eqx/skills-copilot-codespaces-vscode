// Create web server

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const comments = [
    { id: 1, author: 'John', text: 'Hello everyone!' },
    { id: 2, author: 'Jane', text: 'Hi!' },
    { id: 3, author: 'Alice', text: 'Good morning!' },
    { id: 4, author: 'Bob', text: 'Good afternoon!' },
    { id: 5, author: 'Charlie', text: 'Good evening!' }
];

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/:id', (req, res) => {
    const comment = comments.find(comment => comment.id === parseInt(req.params.id));
    if (!comment) {
        res.status(404).send('The comment with the given ID was not found');
        return;
    }
    res.json(comment);
});

app.post('/comments', (req, res) => {
    const comment = {
        id: comments.length + 1,