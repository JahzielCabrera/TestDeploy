const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hi! from Digital Ocean'));

app.listen(3030)
console.log('Server on Port: 3030')