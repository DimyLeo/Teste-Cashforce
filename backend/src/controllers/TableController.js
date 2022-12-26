const TableService = require('../services/TableService');

const tableAll = async (_req, res) => {
  const response = await TableService.concatAllService();
  res.status(200).json(response);
};

module.exports = { 
  tableAll,
};