var express = require('express');

app = express();

app.get('/bangladesh', (req, res) => {
    try {
        res.redirect('http://localhost:5000/pakistan');
    }
    catch (error) {
        console.log(error);
    }
});

app.get('/pakistan', (req, res) => {
    try {
        res.send("This is Pakistan.");
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server connected");
});

