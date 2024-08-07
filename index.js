const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
