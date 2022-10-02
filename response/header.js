var express = require('express');

app = express();

app.get('/header', (req, res) => {
    try {
        res.append("name", "saad");
        res.append("age", "25");
        res.append("city", "rajshahi");

        res.status(201).end("This is header.");
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server connected");
});

