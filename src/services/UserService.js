const { Users } = require('../models');

const getAllService = async () => {
  const response = await Users.findAll();

  return response;
};

module.exports = {
  getAllService,
};