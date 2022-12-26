const ProviderService = require('../services/ProviderService');

const getAll = async (_req, res) => {
  const response = await ProviderService.getAllService();
  return res.status(200).json(response);
};

module.exports = {
  getAll,
};