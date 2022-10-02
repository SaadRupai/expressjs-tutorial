var express = require('express');

app = express();

app.get('/clrcookie', (req, res) => {
    try {
        res.clearCookie("name", "saad");
        res.clearCookie("age", "25");

        res.end("cookie cleared successfully");
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server connected");
});