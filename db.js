let Sequelize = require('sequelize');

let db = new Sequelize('testreact', 'react', 'pass', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const itemFields = {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  count: {
    type: Sequelize.INTEGER
  }
};

const itemOptions = {
  timestamps: false
};

let item = db.define('item', itemFields, itemOptions);
item.sync();

module.exports = { item };
