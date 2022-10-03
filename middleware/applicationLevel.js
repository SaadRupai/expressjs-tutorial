var express = require('express');

app = express();

// application level middleware

app.use(function (req, res, next) {
    console.log("I am application level middleware");

    // Middlware is after req and before res, so next() - indicates to go to 
    // next step - res
    next();
})


app.get('/', (req, res) => {
    try {
        res.send("Home page");
    }
    catch (error) {
        console.log("failed!", error);
    }
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