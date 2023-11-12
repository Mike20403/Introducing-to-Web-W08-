const express = require('express');
const app = express();

const path = require('path');
const indexRouter = require('./routes/index');
const userdetailRouter = require('./routes/user-detail');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes 
app.use('/', indexRouter);
app.use('/user-detail/:id', userdetailRouter);
// app.use('/user-detail', userdetailRouter);
const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})