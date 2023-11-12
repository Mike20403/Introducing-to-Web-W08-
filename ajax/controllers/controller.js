// controllers/calculatorController.js
const express = require('express');
const calcModel = require('../models/calcModel');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('home', { xv: 0, yv: 0, result: null });
});

router.post('/calculate', (req, res) => {
    const x = parseFloat(req.body.x);
    const y = parseFloat(req.body.y);
    const opt = req.body.opt;

    const result = calcModel.calculate(x, y, opt);

    res.render('home', { xv: x, yv: y, result: result });
});

module.exports = router;