const express = require(`express`);
const userController = require(`../controllers/userController`)
const userDetailRouter = express.Router();

userDetailRouter.get('/', userController.renderUserDetail);

module.exports = userDetailRouter;