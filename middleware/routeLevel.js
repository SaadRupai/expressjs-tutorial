var express = require('express');

app = express();


app.get('/', (req, res) => {
    try {
        res.send("Home page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});


// route level middleware
app.use('/about', function (req, res, next) {
    console.log("I am route(about) level middleware");

    next();
});

app.get('/about', (req, res) => {
    try {
        res.send("About page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});
app.get('/products', (req, res) => {
    try {
        res.send("Products page");
    }
    catch (error) {
        console.log("failed!", error);
    }
});


app.listen(8000, () => {
    console.log("server connection successful!");
});