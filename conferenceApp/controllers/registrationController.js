// controllers/registrationController.js
const registrationModel = require('../models/registrationModel');

const registrationController = {
    showRegistrationPage: (req, res) => {
        res.render('registration', { message: null });
    },

    processRegistration: (req, res) => {
        const { fullname, email, phone, confirmation } = req.body;
        registrationModel.addRegistration(fullname, email, phone, confirmation);
        res.render('registration', { message: 'Registration Successful' });
    },
};

module.exports = registrationController;