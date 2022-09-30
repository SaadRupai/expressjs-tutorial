var express = require('express');

app = express();


app.get('/json', (req, res) => {
    try {
        let myJsonArray = [
            {
                name: "saad",
                age: "25",
                city: "Rajshahi"
            },
            {
                name: "raad",
                age: "22",
                city: "Gaibandha"
            },
            {
                name: "sakib",
                age: "24",
                city: "Tangail"
            }
        ]
        res.json(myJsonArray);
    }
    catch (error) {
        console.log(error);
    }
});

app.listen(8080, () => {
    console.log("server connection successful");
});