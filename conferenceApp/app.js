const express = require('express');
const app = express();
const path = require('path');
const registrationRouter = require('./routes/registration ');
const indexRouter = require('./routes/index');
const feedbackRouter = require('./routes/feedback');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use('/', indexRouter);
app.use('/registration', registrationRouter);
app.use('/feedback', feedbackRouter);

// Start server
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});