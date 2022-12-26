const express = require('express');

const app = express();
const usersRoutes = require('./routes/UsersRoutes');

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Página inicial');
});

app.use('/users', usersRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
