// routes/registrationRoute.js
const express = require('express');
const registrationController = require('../controllers/registrationController');

const registrationRouter = express.Router();

registrationRouter.get('/', registrationController.showRegistrationPage);
registrationRouter.post('/', registrationController.processRegistration);

module.exports = registrationRouter;