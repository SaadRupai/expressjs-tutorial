var express = require('express');
var multer = require('multer');

var app = express();

var storage = multer.diskStorage({
    destination: function (req, file, callBack) {
        callBack(null, './uploads');
    },
    filename: function (req, file, callBack) {
        callBack(null, file.originalname);
    }
});

var upload = multer({ storage: storage }).single('myFile');

app.post('/upload', (req, res) => {
    upload(req, res, function (error) {
        if (error) {
            res.send("File upload failed" + error);
        }
        res.send("File upload successful");
    });

});

app.listen(8000, () => {
    console.log("server connection successful");
});