const express = require('express');

const app = express();
const tableRoutes = require('./routes/TableRoutes');

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Página inicial');
});

app.use('/table', tableRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('Servidor rodando na porta 3000');
});
