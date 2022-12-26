const express = require('express');

const controllerProvider = require('../controllers/ProviderController');

const { getAll } = controllerProvider;

const router = express.Router();

router.get('/', getAll);

module.exports = router;