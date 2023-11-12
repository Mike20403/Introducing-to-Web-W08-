const express = require('express');
const app = express();

app.set('view engine', 'ejs'); // Set EJS as the view engine
app.set('views', __dirname + '/views'); // Directory for your views

// Route to render the 'home' view
app.get('/', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);
    const opt = req.query.opt;

    let result = 0;
    switch (opt) {
        case "plus":
            result = x + y;
            break;
        case "minus":
            result = x - y;
            break;
        case "multi":
            result = x * y;
            break;
        case "divide":
            result = parseFloat(x / y);
            break;
    }
    res.render("home", { xv: x, yv: y, result: result });
});

// Starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});