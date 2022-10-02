var express = require('express');

app = express();


app.post('/query', (req, res) => {
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    let age = req.query.age;

    res.end(firstName + " " + lastName + " " + age);
});


app.listen(8000, () => {
    console.log("server connection successful!");
});