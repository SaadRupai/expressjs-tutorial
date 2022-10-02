var express = require('express');

app = express();

app.get('/cookie', (req, res) => {
    try {
        res.cookie("name", "saad");
        res.cookie("age", "25");
        res.cookie("city", "rajshahi");

        res.end("cookie set successfully");
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server connected");
});