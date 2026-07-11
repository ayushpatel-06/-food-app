const Sequelize = require('sequelize');

const db = new Sequelize('mysql://root:sGtwibLDpVmDAXkLJNnETGJNbtotLkIi@mysql.railway.internal:3306/railway', {
  dialect: 'mysql',
  logging: false,
});

module.exports = db;