const express = require('express');

const app = express();
const usersRoutes = require('./routes/UsersRoutes');
const ordersRoutes = require('./routes/OrdersRoutes');
const buyerRoutes = require('./routes/BuyersRoutes');
const providerRoutes = require('./routes/ProvidersRoutes');
const tableRoutes = require('./routes/TableRoutes');

app.use(express.json());

app.get('/', async (_req, res) => {
  res.send('Página inicial');
});

app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);
app.use('/buyers', buyerRoutes);
app.use('/providers', providerRoutes);
app.use('/table', tableRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
