var express = require('express');

app = express();

app.get('/download', (req, res) => {
    try {
        res.download('../images/black.jpg');
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(5000, () => {
    console.log("server connected");
});
