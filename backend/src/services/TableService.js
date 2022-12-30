/* eslint-disable no-param-reassign */
/* eslint-disable radix */

const { Order } = require('../models');
const { Buyer } = require('../models');
const { Provider } = require('../models');

const statusDescription = [
  'Pendente de confirmação',
  'Pedido confirmado',
  'Não reconhece o pedido',
  'Mercadoria não recebida',
  'Recebida com avaria',
  'Devolvida',
  'Recebida com devolução parcial',
  'Recebida e confirmada',
  'Pagamento Autorizado',
];

const tableAllService = async () => {
  const orders = await Order.findAll({
    include: [
      { model: Buyer, as: 'Buyer' },
      { model: Provider, as: 'Provider' },
    ],
  });

  orders.map((index) => {
    const statusInteger = parseInt(index.orderStatusBuyer);
    const valueInteger = parseInt(index.value);
    const dateFormat = new Date(index.emissionDate).toLocaleDateString('pt-br');
    const valueFormat = valueInteger.toLocaleString('pt-br', 
    { style: 'currency', currency: 'BRL' });

    index.orderStatusBuyer = statusDescription[statusInteger];
    index.emissionDate = dateFormat;
    index.value = valueFormat;

    return index;
  });
  return orders;
};

module.exports = {
  tableAllService,
};