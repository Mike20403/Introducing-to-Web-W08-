// app.js
const express = require('express');
const app = express();
const calculatorController = require('./controllers/controller');

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', calculatorController);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});