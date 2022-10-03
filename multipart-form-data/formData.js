var express = require('express');
var multer = require('multer');
//multer instance
var multer = multer();

var app = express();
app.use(multer.array());
app.use(express.static('public'));

app.post('/form', (req, res) => {
    let jsonData = req.body;
    res.send(JSON.stringify(jsonData));
});

app.listen(8000, () => {
    console.log("server connection successful");
});

