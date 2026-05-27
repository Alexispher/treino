const mysql = require('mysql2');

// Cria a conexão com o banco que você criou no MySQL
const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // Seu usuário do MySQL
    password: 'sua_senha',   // Sua senha do MySQL
    database: 'SistemaTreino'
});

conexao.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco:', err.message);
        return;
    }
    console.log('Conectado com sucesso ao banco MySQL!');
});

module.exports = conexao;