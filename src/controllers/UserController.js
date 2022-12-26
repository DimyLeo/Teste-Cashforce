require('dotenv/config');

const userService = require('../services/UserService');

const getAll = async (_req, res) => {
  const users = await userService.getAllService();
  return res.status(200).json(users);
};

module.exports = {
  getAll,
};