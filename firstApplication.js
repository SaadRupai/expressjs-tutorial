var express = require('express');

app = express();


app.get('/', (req, res) => {
    try {
        res.send("Hello from express js");
    }
    catch (error) {
        console.log("failed!", error);
    }
})


app.listen(8000, () => {
    console.log("server connection successful!");
})