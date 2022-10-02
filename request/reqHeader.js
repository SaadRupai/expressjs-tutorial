var express = require('express');

app = express();


app.get('/header', (req, res) => {
    let firstName = req.header('firstName');
    let lastName = req.header('lastName');
    let age = req.header('age');
    let userAgent = req.header('User-Agent');

    // The header values should be given in header before 
    // sending the get() request using postman

    res.end(firstName + " " + lastName + " " + age + " " + userAgent);
});


app.listen(8000, () => {
    console.log("server connection successful!");
});