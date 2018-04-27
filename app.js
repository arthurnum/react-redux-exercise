const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const io = require('socket.io');
const app = express();
const fs = require('fs');

const db = require('./db');

app.use(express.static(path.join(__dirname, 'react-client/build')));
app.use(bodyParser.json());

app.get('/ping', function (req, res) {
  return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'react-client/build', 'index.html'));
});


// Websocket
let socketServer = new io(8081);
socketServer.on('connection', (socket) => {

  socket.on('fileUpload', data => {
    fs.open('./fileTransfered', 'w', (err, fd) => {
      console.log(err);
      console.log(fd);
      fs.write(fd, data, () => {
        fs.closeSync(fd);
      });
    });
  });

});

// Items api

app.get('/items', function (req, res) {
  let page = parseInt(req.query.page || 1);
  if (page < 1) { page = 1 }
  let options = {
    limit: 4,
    offset: (page - 1) * 4
  };
  db.item.findAll(options).then(items => {
    let result = items.map(i => { return i.get(); });
    return res.json({ page: page, items: result });
  });
});

app.put('/items', function (req, res) {
  db.item.findById(req.body.id).then(item => {
    item.count += 1;
    item.save().then(item => {
      let data = { status: 0, item: item };
      socketServer.emit('itemUpdate', JSON.stringify(data));
      res.json(data);
    });
  })
});

app.post('/items', function (req, res) {
  let item = db.item.build({ name: req.body.name });
  item.save().then(item => {
    res.json({ status: 0, item: item })
  })
})

app.delete('/items', function (req, res) {
  db.item.findById(req.query.id).then(item => {
    item.destroy().then(() => {
      let data = { status: 0, item: item };
      socketServer.emit('itemDelete', JSON.stringify(data));
      res.json(data);
    })
  })
})

app.listen(8080);
