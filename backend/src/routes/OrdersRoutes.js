const express = require('express');

const controllerOrder = require('../controllers/OrderController');

const { getAll } = controllerOrder;

const router = express.Router();

router.get('/', getAll);

module.exports = router;