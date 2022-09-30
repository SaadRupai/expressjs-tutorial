var express = require('express');

app = express();

app.get('/', (req, res) => {
    try {
        res.end("this is get string response");
    }
    catch (error) {
        console.log(error);
    }
});

// res.send() - response body 
// res.end() -  response end point


app.post('/', (req, res) => {
    try {
        res.send("this is string post response")
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(8080, () => {
    console.log("server connection successful");
});