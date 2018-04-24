const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();

const db = require('./db');

app.use(express.static(path.join(__dirname, 'react-client/build')));
app.use(bodyParser.json());

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

app.put('/items', function (req, res) {
  db.item.findById(req.body.id).then(item => {
    item.count += 1;
    item.save().then(item => {
      res.json({ status: 0, item: item })
    });
  })
});

app.post('/items', function (req, res) {
  let item = db.item.build({ name: req.body.name });
  item.save().then(item => {
    res.json({ status: 0, item: item })
  })
})


app.listen(8080);
