const { User } = require('../models');

const getAllService = async () => {
  const response = await User.findAll();

  return response;
};

module.exports = {
  getAllService,
};