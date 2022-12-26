const { Buyer } = require('../models');

const getAllService = async () => {
  const response = await Buyer.findAll();

  return response;
};

module.exports = {
  getAllService,
};