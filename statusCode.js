var express = require('express');

app = express();


app.get('/three', (req, res) => {
    try {
        // res.status(201).end();
        res.status(401).end("unauthorized");
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(8080, () => {
    console.log("server connection successful");
});