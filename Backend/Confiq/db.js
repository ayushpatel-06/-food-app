const path = require('path');
const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const connectionString = process.env.MYSQL_URL || process.env.DATABASE_URL || process.env.DB_URL || 'mysql://root:tWWoVukQUxoqcMRnmRcXuMEzysgbhlNq@tokaido.proxy.rlwy.net:47254/railway';

const db = new Sequelize(connectionString, {
  dialect: 'mysql',
  logging: false,
});

module.exports = db;