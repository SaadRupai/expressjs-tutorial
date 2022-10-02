var express = require('express');

app = express();


app.post('/', (req, res) => {
    try {
        res.send("This is simple post request");
    }
    catch (error) {
        console.log("failed!", error);
    }
})


app.listen(8000, () => {
    console.log("server connection successful!");
});