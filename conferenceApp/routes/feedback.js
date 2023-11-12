// routes/feedbackRoute.js
const express = require('express');
const registrationModel = require('../models/registrationModel');
const feedbackRouter = express.Router();

feedbackRouter.get('/', (req, res) => {
    const registrations = registrationModel.getAllRegistrations();
    res.render('feedback', { registrations });
});

module.exports = feedbackRouter;