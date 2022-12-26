const { Provider } = require('../models');

const getAllService = async () => {
  const response = await Provider.findAll();

  return response;
};

module.exports = {
  getAllService,
};