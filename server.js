'use strict';
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(express.static('dist'));
app.get('/', (req, res, next) => {
    // res.send('hello world \n')
    res.sendFile('/')
    next()
});

app.get('/api/json', (req, res) => {
    res.send({
        code: 0,
        data: 'This is message from node container'
    })
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
