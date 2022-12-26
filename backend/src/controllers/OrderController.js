const orderService = require('../services/OrderService');

const getAll = async (_req, res) => {
  const response = await orderService.getAllService();
  return res.status(200).json(response);
};

module.exports = {
  getAll,
};