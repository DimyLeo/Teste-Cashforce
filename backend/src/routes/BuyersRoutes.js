const express = require('express');

const controllerBuyer = require('../controllers/BuyerController');

const { getAll } = controllerBuyer;

const router = express.Router();

router.get('/', getAll);

module.exports = router;