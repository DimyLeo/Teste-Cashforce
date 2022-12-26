const { Order } = require('../models');

const getAllService = async () => {
  const response = await Order.findAll();

  return response;
};

module.exports = {
  getAllService,
};