const express = require('express');

const app = express();
const tableRoutes = require('./routes/TableRoutes');

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Página inicial');
});

app.use('/table', tableRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
