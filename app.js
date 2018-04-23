const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const db = require('./db');

app.use(express.static(path.join(__dirname, 'react-client/build')));

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-client/build', 'index.html'));
});

app.get('/items', function (req, res) {
  db.item.findAll().then(items => {
    let result = items.map(i => { return i.get(); });
    return res.json({ items: result });
  });
});


app.listen(8080);
