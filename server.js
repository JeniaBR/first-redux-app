"use strict"

const express = require('express');
const path = require('path');
const app = express();

// Middleware to define folder for static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(3000, () => {
  console.log('App is listening on port 3000')
});