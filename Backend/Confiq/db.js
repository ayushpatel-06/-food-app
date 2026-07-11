const Sequelize = require('sequelize');

const connectionString = process.env.DATABASE_URL || process.env.MYSQL_URL;

if (!connectionString) {
  throw new Error('Missing database connection string. Set DATABASE_URL or MYSQL_URL.');
}

const db = new Sequelize(connectionString, {
  dialect: 'mysql',
  logging: false,
});

module.exports = db;