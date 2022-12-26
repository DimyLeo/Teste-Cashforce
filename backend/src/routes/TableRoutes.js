const express = require('express');

const controllerTable = require('../controllers/TableController');

const { tableAll } = controllerTable;

const router = express.Router();

router.get('/', tableAll);

module.exports = router;