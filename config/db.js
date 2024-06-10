const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'mydatabase-vasraabijeeth-7158.i.aivencloud.com',
  user: 'avnadmin',
  password: 'AVNS_4wGVzfS-mddMZbuwx9i',
  database: 'defaultdb',
  port: 24584
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to the database.');
  }
});

module.exports = db;
