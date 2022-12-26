const { Order } = require('../models');
const { Buyer } = require('../models');
const { Provider } = require('../models');

const concatAllService = async () => {
  const buyerReturn = await Buyer.findAll({ attributes: ['name'] }); // SACADO

  const providerReturn = await Provider.findAll({ attributes: ['name'] }); // CEDENTE

  const orderReturn = await Order.findAll({
    attributes: [
      'emissionDate',
      'value',
      'orderStatusBuyer',
      'orderNfId',
    ],
  });

  return { orderReturn, buyerReturn, providerReturn };
};

module.exports = {
  concatAllService,
};