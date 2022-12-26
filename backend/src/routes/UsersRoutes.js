const express = require('express');

const controllerUser = require('../controllers/UserController');

const { getAll } = controllerUser;

const router = express.Router();

router.get('/', getAll);

module.exports = router;