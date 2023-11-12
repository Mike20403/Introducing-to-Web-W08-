const express = require('express');

const indexRouter = express.Router();
const userController = require(`../controllers/userController`)

indexRouter.get('/', userController.renderIndex);

module.exports = indexRouter;