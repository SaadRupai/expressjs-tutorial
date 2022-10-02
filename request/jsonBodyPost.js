var express = require('express');
var bodyParser = require('body-parser');

app = express();
app.use(bodyParser.json());


app.post('/json', (req, res) => {
    try {
        let jsonData = req.body;
        // let jsonString = JSON.stringify(jsonData);
        let jsonName = jsonData.name;
        let jsonCity = jsonData['city'];

        // res.send(jsonString);
        res.send(jsonName + " " + jsonCity);
    }
    catch (error) {
        console.log("failed!", error);
    }
});


app.listen(8000, () => {
    console.log("server connection successful!");
});

