const BuyerService = require('../services/BuyerService');

const getAll = async (_req, res) => {
  const response = await BuyerService.getAllService();
  return res.status(200).json(response);
};

module.exports = {
  getAll,
};