const express = require('express');
const mysql = require('mysql2');
const app = express();

// Configura o EJS como motor de visualização (renderiza HTML)
app.set('view engine', 'ejs');

// Configura a conexão com o seu banco de dados MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',          // Coloque seu usuário do MySQL
    password: 'sua_senha',  // Coloque sua senha do MySQL
    database: 'SistemaTreino'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao banco de dados MySQL!');
});

// Rota principal: Busca os dados com o SEU JOIN e renderiza na tela
app.get('/', (req, res) => {
    const query = `
        SELECT a.nome, t.data_treino, e.nome_exercicio, e.carga_kg 
        FROM Atleta a
        JOIN Treino t ON a.id = t.id_atleta
        JOIN Exercicio e ON t.id = e.id_treino
    `;

    db.query(query, (err, resultados) => {
        if (err) throw err;
        
        // Renderiza o arquivo index.ejs passando a lista de treinos direto
        res.render('index', { treinos: resultados });
    });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
