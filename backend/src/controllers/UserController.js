const userService = require('../services/UserService');

const getAll = async (_req, res) => {
  const response = await userService.getAllService();
  return res.status(200).json(response);
};

module.exports = {
  getAll,
};