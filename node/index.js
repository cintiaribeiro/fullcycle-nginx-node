const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};

const connection = mysql.createConnection(config);

// Cria a tabela se não existir
const createTable = `CREATE TABLE IF NOT EXISTS people (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    PRIMARY KEY(id)
)`;
connection.query(createTable);

// Insere nome
const insertName = `INSERT INTO people(name) values('Full Cycle')`;
connection.query(insertName);

app.get('/', (req, res) => {
  connection.query('SELECT name FROM people', (err, results) => {
    if (err) {
      return res.status(500).send('Erro ao buscar dados');
    }

    const list = results.map(row => `<li>${row.name}</li>`).join('');
    res.send(`
      <h1>Full Cycle Rocks!</h1>
      <ul>
        ${list}
      </ul>
    `);
  });
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
