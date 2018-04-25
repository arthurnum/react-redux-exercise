let Sequelize = require('sequelize');

const dbConfig = {
  DB_NAME: 'testreact',
  DB_USER: 'react',
  DB_PASSWORD: 'pass',
  DB_OPTIONS: {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
};

let db = new Sequelize(
  dbConfig.DB_NAME,
  dbConfig.DB_USER,
  dbConfig.DB_PASSWORD,
  dbConfig.DB_OPTIONS
);

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
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING
  },
  count: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
};

const itemOptions = {
  timestamps: false
};

let item = db.define('item', itemFields, itemOptions);
item.sync();

module.exports = { item };
